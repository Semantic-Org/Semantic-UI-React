import faker from 'faker'
import _ from 'lodash'
import path from 'path'
import React, { createElement } from 'react'
import ReactDOMServer from 'react-dom/server'

import META from 'src/utils/Meta'
import * as stardust from 'stardust'
import * as sui from 'src/utils/semanticUtils'
import numberToWord from 'src/utils/numberToWord'
import * as consoleUtil from 'test/utils/consoleUtil'
import sandbox from 'test/utils/Sandbox-util'
import * as syntheticEvent from 'test/utils/syntheticEvent'

import Icon from 'src/elements/Icon/Icon'
import Image from 'src/elements/Image/Image'

const componentCtx = require.context('../../src/', true, /(addons|collections|elements|modules|views).*\.js$/)

const componentInfo = componentCtx.keys().map(key => {
  const Component = componentCtx(key).default
  const { _meta, prototype } = Component

  if (!_meta) {
    throw new Error([
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
 * @param {Object} [requiredProps={}] Props required to render Component without errors or warnings.
 */
export const isConformant = (Component, requiredProps = {}) => {
  // tests depend on Component constructor names, enforce them
  if (!Component.prototype.constructor.name) {
    throw new Error([
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
    subComponentName,
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
  // detect components like: stardust.H1
  const isStardustProp = _.has(stardust, constructorName)

  // detect sub components like: stardust.Form.Field (ie FormField component)
  // only search the 'parent' for the sub component
  // avoid false positives like DropdownItem & MenuItem
  //   which both have sub component names of "Item", and appear
  //   on both Dropdown.Item and Menu.Item (not to mention Stardust.Item)
  const isSubComponent = _.isFunction(_.get(stardust, `[${_.get(_meta, 'parent')}][${subComponentName}]`))

  if (META.isPrivate(constructorName)) {
    it('is not exported as a component nor sub component', () => {
      expect(isStardustProp).to.equal(false,
        `"${constructorName}" is private (starts with  "_").` +
        ' It cannot be a key on the stardust object'
      )

      expect(isSubComponent).to.equal(false,
        `"${constructorName}" is private (starts with "_").` +
        ' It cannot be a static prop of another component (sub-component)'
      )
    })
  } else {
    it('is exported as a component or sub component', () => {
      expect(isStardustProp || isSubComponent).to.equal(true,
        `"${constructorName}" must be:` +
        ' a key on stardust' +
        ' || key on another component (sub-component)' +
        ' || private (start with "_")'
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

  // ----------------------------------------
  // Events
  // ----------------------------------------
  it('handles events transparently', () => {
    // Stardust events should be handled transparently, working just as they would in vanilla React.
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

        wrapper
          .find('[data-simulate-event-here]')
          .simulate(eventName, eventShape)

        // give event listeners opportunity to cleanup
        if (wrapper && wrapper.unmount && wrapper.instance().componentWillUnmount) {
          wrapper.instance().componentWillUnmount()
        }

        // <Dropdown onBlur={handleBlur} />
        //                   ^ was not called on "blur"
        const leftPad = ' '.repeat(constructorName.length + listenerName.length + 3)

        handlerSpy.called.should.equal(true,
          `<${constructorName} ${listenerName}={${handlerName}} />\n` +
          `${leftPad} ^ was not called on "${eventName}".` +
          'You may need to hoist your event handlers up to the root element.\n'
        )

        // TODO: https://github.com/TechnologyAdvice/stardust/issues/218
        // some components currently return useful data in the first position
        // update those to return the event first, then any data, finally uncomment this test
        //
        // handlerSpy.calledWithMatch(eventShape).should.equal(true,
        //   `<${constructorName} ${listenerName}={${handlerName}} />\n` +
        //   `${leftPad} ^ was not called with an "${listenerName}" event\n` +
        //   'It was called with args:\n' +
        //   JSON.stringify(handlerSpy.args, null, 2)
        // )
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

    describe('library', () => {
      it('is defined', () => {
        expect(_meta).to.have.any.keys('library')
      })
      it('is a META.library', () => {
        expect(_.values(META.library)).to.contain(_meta.library)
      })
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
          expect(_.map(stardust, c => c.prototype.constructor.name)).to.contain(_meta.parent)
        })
      })
    }
    describe('type', () => {
      it('is defined', () => {
        expect(_meta).to.have.any.keys('type')
      })
      it('is a META.type', () => {
        expect(_.values(META.type)).to.contain(_meta.type)
      })
    })
  })

  // ----------------------------------------
  // Handles className
  // ----------------------------------------
  describe('className (common)', () => {
    const isHeader = /(header|h1|h2|h3|h4|h5|h6)/i.test(componentClassName)

    it('does not have an sd-* className', () => {
      const wrapper = shallow(<Component {...requiredProps} />)
      const className = wrapper.prop('className')
      const children = wrapper.children()

      // component itself
      if (className) className.should.not.contain('sd-')

      // children
      children.forEach(c => {
        const childClassName = c.prop('className')
        if (childClassName) childClassName.should.not.contain('sd-')
      })
    })

    // TODO: do not exclude headers once their APIs are updated
    if (!isHeader && META.isSemanticUI(Component)) {
      it(`has the Semantic UI className "${componentClassName}"`, () => {
        render(<Component {...requiredProps} />)
          .should.have.className(componentClassName)
      })
    }

    it("applies user's className to root component", () => {
      const classes = faker.hacker.phrase()
      shallow(<Component {...requiredProps} className={classes} />)
        .should.have.className(classes)
    })

    // TODO: do not exclude headers once their APIs are updated
    if (!isHeader) {
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
    }
  })
}

/**
 * Assert a component adds the Semantic UI "ui" className.
 * @param {React.Component|Function} Component The Component.
 * @param {Object} [requiredProps={}] Props required to render the component.
 */
export const hasUIClassName = (Component, requiredProps = {}) => {
  it('has the "ui" className', () => {
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
 * Assert a component can be receive focus via the tab key.
 * @param {React.Component|Function} Component The Component.
 * @param {Object} [requiredProps={}] Props required to render the component.
 */
export const isTabbable = (Component, requiredProps = {}) => {
  it('is tabbable', () => {
    shallow(<Component {...requiredProps} />)
      .should.have.attr('tabindex', '0')
  })
}

/**
 * Assert a component renders children somewhere in the tree.
 * @param {React.Component|Function} Component A component that should render children.
 * @param {Object} [requiredProps={}] Props required to render the component.
 */
export const rendersChildren = (Component, requiredProps = {}) => {
  it('renders child text', () => {
    const text = faker.hacker.phrase()
    shallow(createElement(Component, requiredProps, text))
      .should.contain.text(text)
  })

  it('renders child components', () => {
    const child = <div data-child={faker.hacker.noun()} />
    shallow(createElement(Component, requiredProps, child))
      .should.contain(child)
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

const _noDefaultClassNameFromProp = (Component, propKey, requiredProps = {}) => {
  it('is not included in className when not defined', () => {
    const wrapper = shallow(<Component {...requiredProps} />)
    wrapper.should.not.have.className(propKey)

    // not all component props define prop options in _meta.props
    // if they do, ensure that none of the prop option values are in className
    // SUI classes ought to be built up using a declarative component API
    const propOptions = _.get(Component, `_meta.props[${propKey}]`)
    _.each(propOptions, propVal => {
      wrapper.should.not.have.className(propVal.toString())
    })
  })
}

const _noClassNameFromBoolProps = (Component, propKey, requiredProps) => {
  const booleans = [true, false]

  _.each(booleans, bool => it(`does not add any className when ${bool}`, () => {
    // silence propType warnings
    consoleUtil.disableOnce()

    const wrapper = shallow(createElement(Component, { ...requiredProps, [propKey]: bool }))

    wrapper.should.not.have.className(propKey)
    wrapper.should.not.have.className('true')
    wrapper.should.not.have.className('false')

    _.each(Component._meta.props[propKey], propVal => {
      wrapper.should.not.have.className(propVal.toString())
    })
  }))
}

const _classNamePropValueBeforePropName = (Component, propKey, requiredProps) => {
  _.each(Component._meta.props[propKey], (propVal) => {
    it(`adds "${propVal} ${propKey}" to className`, () => {
      shallow(createElement(Component, { ...requiredProps, [propKey]: propVal }))
        .should.have.className(`${propVal} ${propKey}`)
    })
  })
}

/**
 * Assert that a Component correctly implements columns prop.
 * @param {React.Component|Function} Component The component to test.
 * @param {boolean} canEqual Flag that indicates possibility of "equal" value.
 * @param {Object} [requiredProps={}] Props required to render the component.
 */
export const implementsColumnsProp = (Component, canEqual, requiredProps = {}) => {
  describe('columns (common)', () => {
    _definesPropOptions(Component, 'columns')
    _noDefaultClassNameFromProp(Component, 'columns', requiredProps)
    _noClassNameFromBoolProps(Component, 'columns', requiredProps)

    it('adds numberToWord value to className', () => {
      const propVal = _.sample(sui.widths)

      shallow(createElement(Component, { ...requiredProps, columns: propVal }))
        .should.have.className([numberToWord(propVal), 'column'].join(' '))
    })

    if (canEqual) {
      it('adds "equal width" to className', () => {
        shallow(createElement(Component, { ...requiredProps, columns: 'equal' }))
          .should.have.className('equal width')
      })
    }
  })
}

export const implementsIconProp = (Component, requiredProps = {}) => {
  const iconName = faker.hacker.noun()
  const assertValid = (element) => {
    const wrapper = shallow(element)
    wrapper
      .should.have.descendants('Icon')
    wrapper
      .find('Icon')
      .should.have.prop('name', iconName)
  }

  describe('icon (common)', () => {
    _noDefaultClassNameFromProp(Component, 'icon')

    it('has no i when not defined', () => {
      shallow(<Component />)
        .should.not.have.descendants('i')
    })

    it('accepts an Icon instance', () => {
      const icon = <Icon name={iconName} />
      assertValid(<Component icon={icon} />)
    })

    it('accepts an icon name string', () => {
      assertValid(<Component icon={iconName} />)
    })
  })
}

export const implementsImageProp = (Component, requiredProps = {}) => {
  const imageSrc = faker.internet.avatar()
  const assertValid = (wrapper) => {
    wrapper.should.have.descendants('Image')
    wrapper.find('Image')
      .should.have.prop('src', imageSrc)
  }
  describe('image (common)', () => {
    _noDefaultClassNameFromProp(Component, 'image')

    it('has no img when prop is not defined', () => {
      shallow(<Component />)
        .should.not.have.descendants('img')
    })

    it('adds a img as first child', () => {
      shallow(<Component image={imageSrc} />)
        .childAt(0)
        .should.match('img')
    })

    it('accepts an Image instance', () => {
      const image = <Image src={imageSrc} />
      assertValid(shallow(<Component image={image} />))
    })

    it('accepts an image src string', () => {
      assertValid(shallow(<Component image={imageSrc} />))
    })
  })
}

/**
 * Assert that a Component correctly implements some width prop.
 * @param {React.Component|Function} Component The component to test.
 * @param {string} propKey The prop name that accepts numbers/words.
 * @param {Object} [requiredProps={}] Props required to render the component.
 */
export const implementsNumberToWordProp = (Component, propKey, requiredProps = {}) => {
  describe(`${propKey} (common)`, () => {
    _definesPropOptions(Component, propKey)
    _noDefaultClassNameFromProp(Component, propKey, requiredProps)
    _noClassNameFromBoolProps(Component, propKey, requiredProps)

    it('adds numberToWord value to className', () => {
      const propVal = _.sample(sui.widths)

      shallow(createElement(Component, { ...requiredProps, [propKey]: propVal }))
        .should.have.className(numberToWord(propVal))
    })
  })
}

/**
 * Assert that a Component correctly implements the "textAlign" prop.
 * @param {React.Component|Function} Component The component to test.
 * @param {Object} [requiredProps={}] Props required to render the component.
 */
export const implementsTextAlignProp = (Component, requiredProps = {}) => {
  describe('aligned (common)', () => {
    _definesPropOptions(Component, 'textAlign')
    _noDefaultClassNameFromProp(Component, 'textAlign')
    _noClassNameFromBoolProps(Component, 'textAlign', requiredProps)

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
 * @param {Object} [requiredProps={}] Props required to render the component.
 */
export const implementsVerticalAlignProp = (Component, requiredProps = {}) => {
  describe('verticalAlign (common)', () => {
    _definesPropOptions(Component, 'verticalAlign')
    _noDefaultClassNameFromProp(Component, 'verticalAlign')
    _noClassNameFromBoolProps(Component, 'verticalAlign', requiredProps)

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
 * @param {Object} [requiredProps={}] Props required to render the component.
 */
export const propKeyOnlyToClassName = (Component, propKey, requiredProps = {}) => {
  describe(`${propKey} (common)`, () => {
    _noDefaultClassNameFromProp(Component, propKey, requiredProps)

    it('adds prop name to className', () => {
      shallow(createElement(Component, { ...requiredProps, [propKey]: true }))
        .should.have.className(propKey)
    })

    it('does not add prop value to className', () => {
      // silence propType warnings
      consoleUtil.disableOnce()

      const value = faker.hacker.noun()
      shallow(createElement(Component, { ...requiredProps, [propKey]: value }))
        .should.not.have.className(value)
    })
  })
}

/**
 * Assert that only a Component prop's value is converted to className.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 * @param {Object} [requiredProps={}] Props required to render the component.
 */
export const propValueOnlyToClassName = (Component, propKey, requiredProps = {}) => {
  describe(`${propKey} (common)`, () => {
    _definesPropOptions(Component, propKey)
    _noDefaultClassNameFromProp(Component, propKey, requiredProps)
    _noClassNameFromBoolProps(Component, propKey, requiredProps)

    it('adds prop value to className', () => {
      const sample = _.sample(Component._meta.props[propKey])
      shallow(createElement(Component, { ...requiredProps, [propKey]: sample }))
        .should.have.className(sample)
    })

    it('does not add prop name to className', () => {
      // silence propType warnings
      consoleUtil.disableOnce()

      const sample = _.sample(Component._meta.props[propKey])
      shallow(createElement(Component, { ...requiredProps, [propKey]: sample }))
        .should.not.have.className(propKey)
    })
  })
}

/**
 * Assert that a Component prop's name and value are required to create a className.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 * @param {Object} [requiredProps={}] Props required to render the component.
 */
export const propKeyAndValueToClassName = (Component, propKey, requiredProps = {}) => {
  describe(`${propKey} (common)`, () => {
    _definesPropOptions(Component, propKey)
    _noDefaultClassNameFromProp(Component, propKey)
    _noClassNameFromBoolProps(Component, propKey, requiredProps)
    _classNamePropValueBeforePropName(Component, propKey, requiredProps)
  })
}

/**
 * Assert that a Component prop name or value convert to a className.
 * @param {React.Component|Function} Component The component to test.
 * @param {String} propKey A props key.
 * @param {Object} [requiredProps={}] Props required to render the component.
 */
export const propKeyOrValueToClassName = (Component, propKey, requiredProps = {}) => {
  describe(`${propKey} (common)`, () => {
    _definesPropOptions(Component, propKey)
    _noDefaultClassNameFromProp(Component, propKey, requiredProps)
    _classNamePropValueBeforePropName(Component, propKey, requiredProps)
    beforeEach(() => {
      // silence propType warnings
      consoleUtil.disableOnce()
    })

    it('adds only the name to className when true', () => {
      shallow(createElement(Component, { ...requiredProps, [propKey]: true }))
        .should.have.className(propKey)
    })

    it('adds no className when false', () => {
      const wrapper = shallow(createElement(Component, { ...requiredProps, [propKey]: false }))

      wrapper.should.not.have.className(propKey)
      wrapper.should.not.have.className('true')
      wrapper.should.not.have.className('false')

      _.each(Component._meta.props[propKey], propVal => {
        wrapper.should.not.have.className(propVal)
      })
    })
  })
}
