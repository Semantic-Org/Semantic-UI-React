import faker from 'faker'
import _ from 'lodash'
import path from 'path'
import React, { createElement, isValidElement } from 'react'
import ReactDOMServer from 'react-dom/server'

import { createShorthand, META, numberToWord } from 'src/lib'
import { consoleUtil, sandbox, syntheticEvent } from 'test/utils'
import * as semanticUIReact from 'semantic-ui-react'

import Button from 'src/elements/Button'
import Icon from 'src/elements/Icon'
import Image from 'src/elements/Image'
import Label from 'src/elements/Label'

const commonTestHelpers = (testName, Component) => {
  const throwError = msg => {
    throw new Error(`${testName}: ${msg} \n  Component: ${Component && Component.name}`)
  }

  const assertRequired = (required, description) => {
    return required || throwError(`Required ${description}, got: ${required} (${typeof required})`)
  }

  return {
    throwError,
    assertRequired,
  }
}

const componentCtx = require.context(
  '../../src/',
  true,
  /(addons|collections|elements|modules|views).\w+.(?!index)\w+.js/
)

const componentInfo = componentCtx.keys().map(key => {
  const Component = componentCtx(key).default
  const componentType = typeof Component

  const { throwError } = commonTestHelpers('componentInfo', Component)

  if (componentType !== 'function') {
    throwError([
      `${key} is not properly exported.`,
      `Components should export a class or function, got: ${componentType}.`,
    ].join(' '))
  }

  const { _meta, prototype } = Component

  if (!_meta) {
    throwError([
      'Component is missing a static _meta object property. This should help identify it:',
      `Rendered:\n${ReactDOMServer.renderToStaticMarkup(<Component />)}`,
    ].join('\n'))
  }

  const constructorName = prototype.constructor.name
  const filePath = key
  const filename = path.basename(key)
  const filenameWithoutExt = path.basename(key, '.js')
  const subComponentName = _.has(_meta, 'parent') && _.has(_meta, 'name')
    ? _meta.name.replace(_meta.parent, '')
    : null

  // name of the component, sub component, or plural parent for sub component groups
  const componentClassName = (
    META.isChild(Component)
      ? subComponentName.replace(/Group$/, `${_meta.parent}s`)
      : _meta.name
  ).toLowerCase()

  return {
    _meta,
    Component,
    constructorName,
    componentClassName,
    subComponentName,
    filePath,
    filename,
    filenameWithoutExt,
  }
})

/**
 * Assert Component conforms to guidelines that are applicable to all components.
 * @param {React.Component|Function} Component A component that should conform.
 * @param {Object} [options={}]
 * @param {Object} [options.eventTargets={}] Map of events and the child component to target.
 * @param {Object} [options.requiredProps={}] Props required to render Component without errors or warnings.
 */
export const isConformant = (Component, options = {}) => {
  const { eventTargets = {}, requiredProps = {} } = options
  const { throwError } = commonTestHelpers('isConformant', Component)

  // tests depend on Component constructor names, enforce them
  if (!Component.prototype.constructor.name) {
    throwError([
      'Component is not a named function. This should help identify it:',
      `static _meta = ${JSON.stringify(Component._meta, null, 2)}`,
      `Rendered:\n${ReactDOMServer.renderToStaticMarkup(<Component />)}`,
    ].join('\n'))
  }

  // extract componentInfo for this component
  const {
    _meta,
    constructorName,
    componentClassName,
    filenameWithoutExt,
  } = _.find(componentInfo, i => i.constructorName === Component.prototype.constructor.name)

  // ----------------------------------------
  // Class and file name
  // ----------------------------------------
  it(`constructor name matches filename "${constructorName}"`, () => {
    constructorName.should.equal(filenameWithoutExt)
  })

  // ----------------------------------------
  // Is exported or private
  // ----------------------------------------
  // detect components like: semanticUIReact.H1
  const isTopLevelAPIProp = _.has(semanticUIReact, constructorName)

  // detect sub components like: semanticUIReact.Form.Field (ie FormField component)
  // Build a path by following _meta.parents to the root:
  //   ['Form', 'FormField', 'FormTextArea']
  let apiPath = []
  let meta = _meta
  while (meta) {
    apiPath.unshift(meta.name)
    meta = _.get(semanticUIReact, [meta.parent, '_meta'])
  }
  // Remove parent name from paths:
  //   ['Form', 'Field', 'TextArea']
  apiPath = apiPath.reduce((acc, next) => (
    [...acc, next.replace(acc.join(''), '')]
  ), [])

  // find the apiPath in the semanticUIReact object
  const isSubComponent = _.isFunction(_.get(semanticUIReact, apiPath))

  if (META.isPrivate(constructorName)) {
    it('is not exported as a component nor sub component', () => {
      expect(isTopLevelAPIProp).to.equal(
        false,
        `"${constructorName}" is private (starts with  "_").` +
        ' It cannot be exposed on the top level API'
      )

      expect(isSubComponent).to.equal(
        false,
        `"${constructorName}" is private (starts with "_").` +
        ' It cannot be a static prop of another component (sub-component)'
      )
    })
  } else {
    // require all components to be exported at the top level
    it('is exported at the top level', () => {
      expect(isTopLevelAPIProp).to.equal(true, [
        `"${constructorName}" must be exported at top level.`,
        'Export it in `src/index.js`.',
      ].join(' '))
    })
  }

  if (_meta.parent) {
    it('is a static component on its parent', () => {
      expect(isSubComponent).to.equal(
        true,
        `\`${constructorName}\` is a child component (has a _meta.parent).` +
        ` It must be a static prop of its parent \`${_meta.parent}\``
      )
    })
  }

  // ----------------------------------------
  // Props
  // ----------------------------------------
  it('spreads user props', () => {
    // JSX does not render custom html attributes so we prefix them with data-*.
    // https://facebook.github.io/react/docs/jsx-gotchas.html#custom-html-attributes
    const props = {
      [`data-${_.kebabCase(faker.hacker.noun())}`]: faker.hacker.verb(),
    }

    // descendants() accepts an enzyme <selector>
    // props should be spread on some descendant
    // we find the descendant with spread props via a matching props object selector
    // we do not test Component for props, of course they exist as we are spreading them
    shallow(<Component {...requiredProps} {...props} />)
      .should.have.descendants(props)
  })

  describe('"as" prop (common)', () => {
    it('renders the component as HTML tags or passes "as" to the next component', () => {
      // silence element nesting warnings
      consoleUtil.disableOnce()

      const tags = ['a', 'em', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'i', 'p', 'span', 'strong']
      try {
        tags.forEach((tag) => {
          shallow(<Component as={tag} />)
            .should.have.tagName(tag)
        })
      } catch (err) {
        tags.forEach((tag) => {
          const wrapper = shallow(<Component as={tag} />)
          wrapper.type().should.not.equal(Component)
          wrapper.should.have.prop('as', tag)
        })
      }
    })

    it('renders as a functional component or passes "as" to the next component', () => {
      const MyComponent = () => null

      try {
        shallow(<Component as={MyComponent} />)
          .type()
          .should.equal(MyComponent)
      } catch (err) {
        const wrapper = shallow(<Component as={MyComponent} />)
        wrapper.type().should.not.equal(Component)
        wrapper.should.have.prop('as', MyComponent)
      }
    })

    it('renders as a ReactClass or passes "as" to the next component', () => {
      class MyComponent extends React.Component {
        render() {
          return <div data-my-react-class />
        }
      }

      try {
        shallow(<Component as={MyComponent} />)
          .type()
          .should.equal(MyComponent)
      } catch (err) {
        const wrapper = shallow(<Component as={MyComponent} />)
        wrapper.type().should.not.equal(Component)
        wrapper.should.have.prop('as', MyComponent)
      }
    })

    it('passes extra props to the component it is renders as', () => {
      const MyComponent = () => null

      shallow(<Component as={MyComponent} data-extra-prop='foo' />)
        .should.have.descendants('[data-extra-prop="foo"]')
    })
  })

  // ----------------------------------------
  // Events
  // ----------------------------------------
  it('handles events transparently', () => {
    // Events should be handled transparently, working just as they would in vanilla React.
    // Example, both of these handler()s should be called with the same event:
    //
    //   <Button onClick={handler} />
    //   <button onClick={handler} />
    //
    // This test catches the case where a developer forgot to call the event prop
    // after handling it internally. It also catch cases where the synthetic event was not passed back.
    _.each(syntheticEvent.types, ({ eventShape, listeners }) => {
      _.each(listeners, listenerName => {
        // onKeyDown => keyDown
        const eventName = _.camelCase(listenerName.replace('on', ''))

        // onKeyDown => handleKeyDown
        const handlerName = _.camelCase(listenerName.replace('on', 'handle'))

        const handlerSpy = sandbox.spy()
        const props = {
          ...requiredProps,
          [listenerName]: handlerSpy,
          'data-simulate-event-here': true,
        }

        const wrapper = shallow(<Component {...props} />)

        const eventTarget = eventTargets[listenerName]
          ? wrapper.find(eventTargets[listenerName])
          : wrapper.find('[data-simulate-event-here]')

        eventTarget.simulate(eventName, eventShape)

        // give event listeners opportunity to cleanup
        if (wrapper.instance() && wrapper.instance().componentWillUnmount) {
          wrapper.instance().componentWillUnmount()
        }

        // <Dropdown onBlur={handleBlur} />
        //                   ^ was not called once on "blur"
        const leftPad = ' '.repeat(constructorName.length + listenerName.length + 3)

        handlerSpy.calledOnce.should.equal(true,
          `<${constructorName} ${listenerName}={${handlerName}} />\n` +
          `${leftPad} ^ was not called once on "${eventName}".` +
          'You may need to hoist your event handlers up to the root element.\n'
        )

        let expectedArgs = [eventShape]
        let errorMessage = 'was not called with (event)'

        if (_.has(Component.propTypes, listenerName)) {
          expectedArgs = [eventShape, props]
          errorMessage = 'was not called with (event, data)'
        }

        // Components should return the event first, then any data
        handlerSpy.calledWithMatch(...expectedArgs).should.equal(true,
          `<${constructorName} ${listenerName}={${handlerName}} />\n` +
          `${leftPad} ^ ${errorMessage}\n` +
          'It was called with args:\n' +
          JSON.stringify(handlerSpy.args, null, 2)
        )
      })
    })
  })

  // ----------------------------------------
  // Defines _meta
  // ----------------------------------------
  describe('_meta', () => {
    it('is a static object prop', () => {
      expect(_meta).to.be.an('object')
    })

    describe('name', () => {
      it('is defined', () => {
        expect(_meta).to.have.any.keys('name')
      })
      it('matches the filename', () => {
        expect(_meta.name).to.equal(filenameWithoutExt)
      })
    })
    if (_.has(_meta, 'parent')) {
      describe('parent', () => {
        it('matches some component name', () => {
          expect(_.map(semanticUIReact, c => c.prototype.constructor.name)).to.contain(_meta.parent)
        })
      })
    }
    describe('type', () => {
      it('is defined', () => {
        expect(_meta).to.have.any.keys('type')
      })
      it('is a META.TYPES value', () => {
        expect(_.values(META.TYPES)).to.contain(_meta.type)
      })
    })
  })

  // ----------------------------------------
  // Handles className
  // ----------------------------------------
  describe('className (common)', () => {
    it(`has the Semantic UI className "${componentClassName}"`, () => {
      const wrapper = render(<Component {...requiredProps} />)
      // don't test components with no className at all (i.e. MessageItem)
      if (wrapper.prop('className')) {
        wrapper.should.have.className(componentClassName)
      }
    })

    it("applies user's className to root component", () => {
      const classes = faker.hacker.phrase()
      shallow(<Component {...requiredProps} className={classes} />)
        .should.have.className(classes)
    })

    it("user's className does not override the default classes", () => {
      const defaultClasses = shallow(<Component {...requiredProps} />)
        .prop('className')

      if (!defaultClasses) return

      const userClasses = faker.hacker.verb()
      const mixedClasses = shallow(<Component {...requiredProps} className={userClasses} />)
        .prop('className')

      defaultClasses.split(' ').forEach((defaultClass) => {
        mixedClasses.should.include(defaultClass, [
          'Make sure you are using the `getUnhandledProps` util to spread the `rest` props.',
          'This may also be of help: https://facebook.github.io/react/docs/transferring-props.html.',
        ].join(' '))
      })
    })
  })
}

/**
 * Assert a component adds the Semantic UI "ui" className.
 * @param {React.Component|Function} Component The Component.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export const hasUIClassName = (Component, options = {}) => {
  const { requiredProps = {} } = options
  const { assertRequired } = commonTestHelpers('hasUIClassName', Component)

  it('has the "ui" className', () => {
    assertRequired(Component, 'a `Component`')

    shallow(<Component {...requiredProps} />)
      .should.have.className('ui')
  })
}

/**
 * Assert a component exposes other components as (static properties).
 * @param {React.Component|Function} Component The Component.
 * @param {React.Component[]} subComponents Array of components that should exist on Component.
 */
export const hasSubComponents = (Component, subComponents) => {
  const staticValues = _.values(Component)

  _.each(subComponents, subComponent => {
    it(`has sub component ${subComponent._meta.name}`, () => {
      staticValues.should.contain(subComponent)
    })
  })
}

/**
 * Assert a component renders children somewhere in the tree.
 * @param {React.Component|Function} Component A component that should render children.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export const rendersChildren = (Component, options = {}) => {
  const { requiredProps = {} } = options
  const { assertRequired } = commonTestHelpers('rendersChildren', Component)

  it('renders child text', () => {
    assertRequired(Component, 'a `Component`')

    const text = faker.hacker.phrase()
    shallow(createElement(Component, requiredProps, text))
      .should.contain.text(text)
  })

  it('renders child components', () => {
    const child = <div data-child={faker.hacker.noun()} />
    shallow(createElement(Component, requiredProps, child))
      .should.contain(child)
  })

  it('renders child number with 0 value', () => {
    shallow(createElement(Component, requiredProps, 0))
      .should.contain.text('0')
  })
}

// ----------------------------------------
// className from prop
// ----------------------------------------
const _definesPropOptions = (Component, propKey) => {
  it(`defines ${propKey} options in Component._meta.props`, () => {
    Component.should.have.any.keys('_meta')
    Component._meta.should.have.any.keys('props')
    Component._meta.props.should.have.any.keys(propKey)
    Component._meta.props[propKey].should.be.an('array')
  })
}

const _noDefaultClassNameFromProp = (Component, propKey, options = {}) => {
  const { className = propKey, requiredProps = {} } = options
  // required props may include a prop that creates a className
  // if so, we cannot assert that it doesn't exist by default because it is required to exist
  // skip assertions for required props
  if (propKey in requiredProps) return

  it('is not included in className when not defined', () => {
    const wrapper = shallow(<Component {...requiredProps} />)
    wrapper.should.not.have.className(className)

    // not all component props define prop options in _meta.props
    // if they do, ensure that none of the prop option values are in className
    // SUI classes ought to be built up using a declarative component API
    _.each(_.get(Component, `_meta.props[${propKey}]`), propVal => {
      wrapper.should.not.have.className(propVal.toString())
    })
  })
}

const _noClassNameFromBoolProps = (Component, propKey, options = {}) => {
  const { className = propKey, requiredProps = {} } = options

  _.each([true, false], bool => it(`does not add any className when ${bool}`, () => {
    // silence propType warnings
    consoleUtil.disableOnce()

    const wrapper = shallow(createElement(Component, { ...requiredProps, [propKey]: bool }))

    wrapper.should.not.have.className(className)
    wrapper.should.not.have.className('true')
    wrapper.should.not.have.className('false')

    _.each(_.get(Component, `_meta.props[${propKey}]`), propVal => {
      wrapper.should.not.have.className(propVal.toString())
    })
  }))
}

const _classNamePropValueBeforePropName = (Component, propKey, options = {}) => {
  const { className = propKey, requiredProps = {} } = options

  _.each(_.get(Component, `_meta.props[${propKey}]`), (propVal) => {
    it(`adds "${propVal} ${className}" to className`, () => {
      shallow(createElement(Component, { ...requiredProps, [propKey]: propVal }))
        .should.have.className(`${propVal} ${className}`)
    })
  })
}
/**
 * Assert a Component correctly implements a shorthand create method.
 * @param {React.Component|Function} Component The component to test.
 */
export const implementsCreateMethod = (Component) => {
  const name = Component._meta.name

  describe('create shorthand method (common)', () => {
    it('is a static method', () => {
      Component.should.have.any.keys('create')
      Component.create.should.be.a('function')
    })
    it(`creates a ${name} from a string`, () => {
      isValidElement(Component.create('foo'))
        .should.equal(true)
    })
    it(`creates a ${name} from a number`, () => {
      isValidElement(Component.create(123))
        .should.equal(true)
    })
    it(`creates a ${name} from a number 0`, () => {
      isValidElement(Component.create(0))
        .should.equal(true)
    })
    it(`creates a ${name} from a props object`, () => {
      isValidElement(Component.create({ 'data-foo': 'bar' }))
        .should.equal(true)
    })
    it(`creates a ${name} from an array`, () => {
      // not all components support array shorthand, suppress warnings
      consoleUtil.disableOnce()
      isValidElement(Component.create(['foo', 123, { 'data-foo': 'bar' }]))
        .should.equal(true)
    })
    it(`creates a ${name} from an element`, () => {
      isValidElement(Component.create(<div />))
        .should.equal(true)
    })
    it('returns null when passed null', () => {
      expect(Component.create(null))
        .to.equal(null)
    })
    it('returns null when passed undefined', () => {
      expect(Component.create(undefined))
        .to.equal(null)
    })
    it('returns null when passed true', () => {
      expect(Component.create(true))
        .to.equal(null)
    })
    it('returns null when passed false', () => {
      expect(Component.create(false))
        .to.equal(null)
    })
  })
}

/**
 * Assert that a Component correctly implements a width prop.
 * @param {React.Component|Function} Component The component to test.
 * @param {object} [options={}]
 * @param {string} [options.propKey] The prop name that accepts a width value.
 * @param {string} [options.widthClass] The className that follows the wordToNumber className.
 *   Examples: one WIDE column, two COLUMN grid, three [none] fields, etc.
 * @param {boolean} [options.canEqual=true] Whether or not to test 'equal width' usage.
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export const implementsWidthProp = (Component, options = {}) => {
  const { assertRequired } = commonTestHelpers('implementsWidthProp', Component)

  const { propKey, widthClass, canEqual = true, requiredProps } = options
  describe(`${propKey} (common)`, () => {
    assertRequired(Component, 'a `Component`')

    _definesPropOptions(Component, propKey)
    _noDefaultClassNameFromProp(Component, propKey, options)
    _noClassNameFromBoolProps(Component, propKey, options)

    it('adds numberToWord value to className', () => {
      _.without(_.get(Component, `_meta.props[${propKey}]`), 'equal').forEach((width) => {
        const expectClass = widthClass ? `${numberToWord(width)} ${widthClass}` : numberToWord(width)

        shallow(createElement(Component, { ...requiredProps, [propKey]: width }))
          .should.have.className(expectClass)
      })
    })

    if (canEqual) {
      it('adds "equal width" to className', () => {
        shallow(createElement(Component, { ...requiredProps, [propKey]: 'equal' }))
          .should.have.className('equal width')
      })
    }
  })
}

/**
 * Assert that a Component correctly implements a shorthand prop.
 *
 * @param {function} Component The component to test.
 * @param {object} options
 * @param {string} options.propKey The name of the shorthand prop.
 * @param {string|function} options.ShorthandComponent The component that should be rendered from the shorthand value.
 * @param {function} options.mapValueToProps A function that maps a primitive value to the Component props
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object|function} [options.shorthandDefaultProps={}] Props required to render the shorthand component.
 * @param {Object} [options.alwaysPresent] Whether or not the shorthand exists by default
 */
export const implementsShorthandProp = (Component, options = {}) => {
  const { assertRequired } = commonTestHelpers('implementsShorthandProp', Component)

  const {
    propKey,
    ShorthandComponent,
    mapValueToProps,
    requiredProps = {},
    shorthandDefaultProps = {},
    alwaysPresent,
  } = options

  describe(`${propKey} shorthand prop (common)`, () => {
    assertRequired(Component, 'a `Component`')
    assertRequired(_.isPlainObject(options), 'an `options` object')
    assertRequired(propKey, 'a `propKey`')
    assertRequired(ShorthandComponent, 'a `ShorthandComponent`')

    const name = typeof ShorthandComponent === 'string'
      ? ShorthandComponent
      : _.get(ShorthandComponent, '_meta.name') || ShorthandComponent.displayName || ShorthandComponent.name

    const assertValidShorthand = (value) => {
      const renderedShorthand = createShorthand(ShorthandComponent, mapValueToProps, value, shorthandDefaultProps)
      const element = createElement(Component, { ...requiredProps, [propKey]: value })

      shallow(element).should.contain(renderedShorthand)
    }

    if (alwaysPresent || Component.defaultProps && Component.defaultProps[propKey]) {
      it(`has default ${name} when not defined`, () => {
        shallow(<Component {...requiredProps} />)
          .should.have.descendants(name)
      })
    } else {
      _noDefaultClassNameFromProp(Component, propKey, options)

      it(`has no ${name} when not defined`, () => {
        shallow(<Component {...requiredProps} />)
          .should.not.have.descendants(name)
      })
    }

    if (!alwaysPresent) {
      it(`has no ${name} when null`, () => {
        shallow(createElement(Component, { ...requiredProps, [propKey]: null }))
          .should.not.have.descendants(ShorthandComponent)
      })
    }

    it(`renders a ${name} from strings`, () => {
      consoleUtil.disableOnce()
      assertValidShorthand('string')
    })

    it(`renders a ${name} from numbers`, () => {
      consoleUtil.disableOnce()
      assertValidShorthand(123)
    })

    // the Input maps shorthand to `type`
    // React uses the default prop ('text') in place of type={0}
    if (propKey !== 'input') {
      it(`renders a ${name} from number 0`, () => {
        consoleUtil.disableOnce()
        assertValidShorthand(0)
      })
    }

    it(`renders a ${name} from a props object`, () => {
      consoleUtil.disableOnce()
      assertValidShorthand(mapValueToProps('foo'))
    })

    it(`renders a ${name} from elements`, () => {
      consoleUtil.disableOnce()
      assertValidShorthand(<ShorthandComponent />)
    })
  })
}

/**
 * Assert that a Component correctly implements a Button shorthand prop.
 *
 * @param {function} Component The component to test.
 * @param {object} [options={}]
 * @param {string} [options.propKey='button'] The name of the shorthand prop.
 * @param {string|function} [options.ShorthandComponent] The component that should be rendered from the shorthand value.
 * @param {function} [options.mapValueToProps] A function that maps a primitive value to the Component props
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object|function} [options.shorthandDefaultProps={}] Props required to render the shorthand component.
 */
export const implementsButtonProp = (Component, options = {}) => {
  const opts = {
    propKey: 'button',
    ShorthandComponent: Button,
    mapValueToProps: val => ({ content: val }),
    requiredProps: {},
    shorthandDefaultProps: {},
    ...options,
  }
  implementsShorthandProp(Component, opts)
}

/**
 * Assert that a Component correctly implements an Icon shorthand prop.
 *
 * @param {function} Component The component to test.
 * @param {object} [options={}]
 * @param {string} [options.propKey='icon'] The name of the shorthand prop.
 * @param {string|function} [options.ShorthandComponent] The component that should be rendered from the shorthand value.
 * @param {function} [options.mapValueToProps] A function that maps a primitive value to the Component props
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object|function} [options.shorthandDefaultProps={}] Props required to render the shorthand component.
 */
export const implementsIconProp = (Component, options = {}) => {
  implementsShorthandProp(Component, {
    propKey: 'icon',
    ShorthandComponent: Icon,
    mapValueToProps: val => ({ name: val }),
    requiredProps: {},
    shorthandDefaultProps: {},
    ...options,
  })
}

/**
 * Assert that a Component correctly implements an HTML input shorthand prop.
 *
 * @param {function} Component The component to test.
 * @param {object} [options={}]
 * @param {string} [options.propKey='icon'] The name of the shorthand prop.
 * @param {string|function} [options.ShorthandComponent] The component that should be rendered from the shorthand value.
 * @param {function} [options.mapValueToProps] A function that maps a primitive value to the Component props
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object|function} [options.shorthandDefaultProps={}] Props required to render the shorthand component.
 */
export const implementsHTMLInputProp = (Component, options = {}) => {
  implementsShorthandProp(Component, {
    propKey: 'input',
    ShorthandComponent: 'input',
    mapValueToProps: val => ({ type: val }),
    requiredProps: {},
    shorthandDefaultProps: {},
    ...options,
  })
}

/**
 * Assert that a Component correctly implements an HTML label shorthand prop.
 *
 * @param {function} Component The component to test.
 * @param {object} [options={}]
 * @param {string} [options.propKey='icon'] The name of the shorthand prop.
 * @param {string|function} [options.ShorthandComponent] The component that should be rendered from the shorthand value.
 * @param {function} [options.mapValueToProps] A function that maps a primitive value to the Component props
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object|function} [options.shorthandDefaultProps={}] Props required to render the shorthand component.
 */
export const implementsHTMLLabelProp = (Component, options = {}) => {
  implementsShorthandProp(Component, {
    propKey: 'label',
    ShorthandComponent: 'label',
    mapValueToProps: val => ({ children: val }),
    requiredProps: {},
    shorthandDefaultProps: {},
    ...options,
  })
}

/**
 * Assert that a Component correctly implements a Label shorthand prop.
 *
 * @param {function} Component The component to test.
 * @param {object} [options={}]
 * @param {string} [options.propKey='label'] The name of the shorthand prop.
 * @param {string|function} [options.ShorthandComponent] The component that should be rendered from the shorthand value.
 * @param {function} [options.mapValueToProps] A function that maps a primitive value to the Component props
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object|function} [options.shorthandDefaultProps={}] Props required to render the shorthand component.
 */
export const implementsLabelProp = (Component, options = {}) => {
  implementsShorthandProp(Component, {
    propKey: 'label',
    ShorthandComponent: Label,
    mapValueToProps: val => ({ content: val }),
    requiredProps: {},
    shorthandDefaultProps: {},
    ...options,
  })
}

/**
 * Assert that a Component correctly implements an Image shorthand prop.
 *
 * @param {function} Component The component to test.
 * @param {object} [options={}]
 * @param {string} [options.propKey='image'] The name of the shorthand prop.
 * @param {string|function} [options.ShorthandComponent] The component that should be rendered from the shorthand value.
 * @param {function} [options.mapValueToProps] A function that maps a primitive value to the Component props
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object|function} [options.shorthandDefaultProps={}] Props required to render the shorthand component.
 */
export const implementsImageProp = (Component, options = {}) => {
  implementsShorthandProp(Component, {
    propKey: 'image',
    ShorthandComponent: Image,
    mapValueToProps: val => ({ src: val }),
    requiredProps: {},
    shorthandDefaultProps: {},
    ...options,
  })
}

/**
 * Assert that a Component correctly implements the "textAlign" prop.
 * @param {React.Component|Function} Component The component to test.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export const implementsTextAlignProp = (Component, options = {}) => {
  const { requiredProps = {} } = options
  const { assertRequired } = commonTestHelpers('implementsTextAlignProp', Component)

  describe('aligned (common)', () => {
    assertRequired(Component, 'a `Component`')

    _definesPropOptions(Component, 'textAlign')
    _noDefaultClassNameFromProp(Component, 'textAlign', options)
    _noClassNameFromBoolProps(Component, 'textAlign', options)

    _.each(Component._meta.props.aligned, (propVal) => {
      if (propVal === 'justified') {
        it('adds "justified" without "aligned" to className', () => {
          shallow(<Component { ...requiredProps } aligned='justified' />)
            .should.have.className('justified')

          shallow(<Component { ...requiredProps } aligned='justified' />)
            .should.not.have.className('aligned')
        })
      } else {
        it(`adds "${propVal} aligned" to className`, () => {
          shallow(<Component { ...requiredProps } aligned={propVal} />)
            .should.have.className(`${propVal} ${'aligned'}`)
        })
      }
    })
  })
}

/**
 * Assert that a Component correctly implements the "verticalAlign" prop.
 * @param {React.Component|Function} Component The component to test.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export const implementsVerticalAlignProp = (Component, options = {}) => {
  const { requiredProps = {} } = options
  const { assertRequired } = commonTestHelpers('implementsVerticalAlignProp', Component)

  describe('verticalAlign (common)', () => {
    assertRequired(Component, 'a `Component`')

    _definesPropOptions(Component, 'verticalAlign')
    _noDefaultClassNameFromProp(Component, 'verticalAlign', options)
    _noClassNameFromBoolProps(Component, 'verticalAlign', options)

    _.each(Component._meta.props.verticalAlign, (propVal) => {
      it(`adds "${propVal} aligned" to className`, () => {
        shallow(<Component { ...requiredProps } verticalAlign={propVal} />)
          .should.have.className(`${propVal} ${'aligned'}`)
      })
    })
  })
}

/**
 * Assert that only a Component prop's name is converted to className.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object} [options.className=propKey] The className to assert exists.
 */
export const propKeyOnlyToClassName = (Component, propKey, options = {}) => {
  const { className = propKey, requiredProps = {} } = options
  const { assertRequired } = commonTestHelpers('propKeyOnlyToClassName', Component)

  describe(`${propKey} (common)`, () => {
    assertRequired(Component, 'a `Component`')
    assertRequired(propKey, 'a `propKey`')

    _noDefaultClassNameFromProp(Component, propKey, options)

    it('adds prop name to className', () => {
      shallow(createElement(Component, { ...requiredProps, [propKey]: true }))
        .should.have.className(className)
    })

    it('does not add prop value to className', () => {
      // silence propType warnings
      consoleUtil.disableOnce()

      const value = 'foo-bar-baz'
      shallow(createElement(Component, { ...requiredProps, [propKey]: value }))
        .should.not.have.className(value)
    })
  })
}

/**
 * Assert that only a Component prop's value is converted to className.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object} [options.className=propKey] The className to assert exists.
 */
export const propValueOnlyToClassName = (Component, propKey, options = {}) => {
  const { requiredProps = {} } = options
  const { assertRequired } = commonTestHelpers('propValueOnlyToClassName', Component)

  describe(`${propKey} (common)`, () => {
    assertRequired(Component, 'a `Component`')
    assertRequired(propKey, 'a `propKey`')

    _definesPropOptions(Component, propKey)
    _noDefaultClassNameFromProp(Component, propKey, options)
    _noClassNameFromBoolProps(Component, propKey, options)

    it('adds prop value to className', () => {
      _.each(_.get(Component, `_meta.props[${propKey}]`), propValue => {
        shallow(createElement(Component, { ...requiredProps, [propKey]: propValue }))
          .should.have.className(propValue)
      })
    })

    it('does not add prop name to className', () => {
      // silence propType warnings
      consoleUtil.disableOnce()

      _.each(_.get(Component, `_meta.props[${propKey}]`), propValue => {
        shallow(createElement(Component, { ...requiredProps, [propKey]: propValue }))
          .should.not.have.className(propKey)
      })
    })
  })
}

/**
 * Assert that a Component prop's name and value are required to create a className.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object} [options.className=propKey] The className to assert exists.
 */
export const propKeyAndValueToClassName = (Component, propKey, options = {}) => {
  const { assertRequired } = commonTestHelpers('propKeyAndValueToClassName', Component)

  describe(`${propKey} (common)`, () => {
    assertRequired(Component, 'a `Component`')
    assertRequired(propKey, 'a `propKey`')

    _definesPropOptions(Component, propKey)
    _noDefaultClassNameFromProp(Component, propKey, options)
    _noClassNameFromBoolProps(Component, propKey, options)
    _classNamePropValueBeforePropName(Component, propKey, options)
  })
}

/**
 * Assert that a Component prop name or value convert to a className.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {Object} [options.className=propKey] The className to assert exists.
 */
export const propKeyOrValueAndKeyToClassName = (Component, propKey, options = {}) => {
  const { className = propKey, requiredProps = {} } = options
  const { assertRequired } = commonTestHelpers('propKeyOrValueAndKeyToClassName', Component)

  describe(`${propKey} (common)`, () => {
    assertRequired(Component, 'a `Component`')
    assertRequired(propKey, 'a `propKey`')

    _definesPropOptions(Component, propKey)
    _noDefaultClassNameFromProp(Component, propKey, options)
    _classNamePropValueBeforePropName(Component, propKey, options)
    beforeEach(() => {
      // silence propType warnings
      consoleUtil.disableOnce()
    })

    it('adds only the name to className when true', () => {
      shallow(createElement(Component, { ...requiredProps, [propKey]: true }))
        .should.have.className(className)
    })

    it('adds no className when false', () => {
      const wrapper = shallow(createElement(Component, { ...requiredProps, [propKey]: false }))

      wrapper.should.not.have.className(className)
      wrapper.should.not.have.className('true')
      wrapper.should.not.have.className('false')

      _.each(_.get(Component, `_meta.props[${propKey}]`), propVal => {
        wrapper.should.not.have.className(propVal)
      })
    })
  })
}
