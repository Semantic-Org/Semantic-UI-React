import faker from 'faker'
import _ from 'lodash'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import * as semanticUIReact from 'semantic-ui-react'

import { META } from 'src/lib'
import { assertBodyContains, consoleUtil, sandbox, syntheticEvent } from 'test/utils'
import helpers from './commonHelpers'
import componentInfo from './componentInfo'
import hasValidTypings from './hasValidTypings'

/**
 * Assert Component conforms to guidelines that are applicable to all components.
 * @param {React.Component|Function} Component A component that should conform.
 * @param {Object} [options={}]
 * @param {Object} [options.eventTargets={}] Map of events and the child component to target.
 * @param {array} [options.rendersPortal=false] Does this component render a Portal powered component?
 * @param {Object} [options.requiredProps={}] Props required to render Component without errors or warnings.
 */
export default (Component, options = {}) => {
  const { eventTargets = {}, requiredProps = {}, rendersPortal = false } = options
  const { throwError } = helpers('isConformant', Component)

  // tests depend on Component constructor names, enforce them
  if (!Component.prototype.constructor.name) {
    throwError([
      'Component is not a named function. This should help identify it:',
      `static _meta = ${JSON.stringify(Component._meta, null, 2)}`,
      `Rendered:\n${ReactDOMServer.renderToStaticMarkup(<Component />)}`,
    ].join('\n'))
  }

  // extract componentInfo for this component
  const extractedInfo = _.find(componentInfo, i => i.constructorName === Component.prototype.constructor.name)
  const {
    _meta,
    constructorName,
    componentClassName,
    filenameWithoutExt,
  } = extractedInfo

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
        ' It cannot be exposed on the top level API',
      )

      expect(isSubComponent).to.equal(
        false,
        `"${constructorName}" is private (starts with "_").` +
        ' It cannot be a static prop of another component (sub-component)',
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
        ` It must be a static prop of its parent \`${_meta.parent}\``,
      )
    })
  }

  // ----------------------------------------
  // Props
  // ----------------------------------------
  it('spreads user props', () => {
    const propName = 'data-is-conformant-spread-props'
    const props = { [propName]: true }

    shallow(<Component {...requiredProps} {...props} />)
      .should.have.descendants(props)
  })

  if (!rendersPortal) {
    describe('"as" prop (common)', () => {
      it('renders the component as HTML tags or passes "as" to the next component', () => {
        // silence element nesting warnings
        consoleUtil.disableOnce()

        const tags = ['a', 'em', 'div', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'i', 'p', 'span', 'strong']
        try {
          tags.forEach((tag) => {
            shallow(<Component {...requiredProps} as={tag} />)
              .should.have.tagName(tag)
          })
        } catch (err) {
          tags.forEach((tag) => {
            const wrapper = shallow(<Component {...requiredProps} as={tag} />)
            wrapper.type().should.not.equal(Component)
            wrapper.should.have.prop('as', tag)
          })
        }
      })

      it('renders as a functional component or passes "as" to the next component', () => {
        const MyComponent = () => null

        try {
          shallow(<Component {...requiredProps} as={MyComponent} />)
            .type()
            .should.equal(MyComponent)
        } catch (err) {
          const wrapper = shallow(<Component {...requiredProps} as={MyComponent} />)
          wrapper.type().should.not.equal(Component)
          wrapper.should.have.prop('as', MyComponent)
        }
      })

      it('renders as a ReactClass or passes "as" to the next component', () => {
        class MyComponent extends React.Component { // eslint-disable-line react/prefer-stateless-function
          render() {
            return <div data-my-react-class />
          }
        }

        try {
          shallow(<Component {...requiredProps} as={MyComponent} />)
            .type()
            .should.equal(MyComponent)
        } catch (err) {
          const wrapper = shallow(<Component {...requiredProps} as={MyComponent} />)
          wrapper.type().should.not.equal(Component)
          wrapper.should.have.prop('as', MyComponent)
        }
      })

      it('passes extra props to the component it is renders as', () => {
        const MyComponent = () => null

        shallow(<Component {...requiredProps} as={MyComponent} data-extra-prop='foo' />)
          .should.have.descendants('[data-extra-prop="foo"]')
      })
    })
  }

  describe('handles props', () => {
    it('defines handled props in Component.handledProps', () => {
      Component.should.have.any.keys('handledProps')
      Component.handledProps.should.be.an('array')
    })

    it('Component.handledProps includes all handled props', () => {
      const computedProps = _.union(
        Component.autoControlledProps,
        _.keys(Component.defaultProps),
        _.keys(Component.propTypes),
      )
      const expectedProps = _.uniq(computedProps).sort()

      Component.handledProps.should.to.deep.equal(expectedProps,
        'It seems that not all props were defined in Component.handledProps, you need to check that they are equal ' +
        'to the union of Component.autoControlledProps and keys of Component.defaultProps and Component.propTypes',
      )
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
      _.each(listeners, (listenerName) => {
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
          'You may need to hoist your event handlers up to the root element.\n',
        )

        let expectedArgs = [eventShape]
        let errorMessage = 'was not called with (event)'

        if (_.has(Component.propTypes, listenerName)) {
          expectedArgs = [eventShape, props]
          errorMessage = 'was not called with (event, data)'
        }

        // Components should return the event first, then any data
        handlerSpy.calledWithMatch(...expectedArgs).should.equal(true, [
          `<${constructorName} ${listenerName}={${handlerName}} />\n`,
          `${leftPad} ^ ${errorMessage}`,
          'It was called with args:',
          JSON.stringify(handlerSpy.args, null, 2),
        ].join('\n'))
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
      const className = 'is-conformant-class-string'

      // Portal powered components can render to two elements, a trigger and the actual component
      // The actual component is shown when the portal is open
      // If a trigger is rendered, open the portal and make assertions on the portal element
      if (rendersPortal) {
        const mountNode = document.createElement('div')
        document.body.appendChild(mountNode)

        const wrapper = mount(<Component {...requiredProps} className={className} />, { attachTo: mountNode })
        wrapper.setProps({ open: true })

        // portals/popups/etc may render the component to somewhere besides descendants
        // we look for the component anywhere in the DOM
        assertBodyContains(`.${className}`)

        wrapper.detach()
        document.body.removeChild(mountNode)
      } else {
        shallow(<Component {...requiredProps} className={className} />)
          .should.have.className(className)
      }
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

  // ----------------------------------------
  // Test typings
  // ----------------------------------------
  hasValidTypings(Component, extractedInfo, options)
}
