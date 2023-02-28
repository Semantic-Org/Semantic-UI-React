import faker from 'faker'
import _ from 'lodash'
import React from 'react'
import ReactIs from 'react-is'
import ReactDOMServer from 'react-dom/server'
import * as semanticUIReact from 'semantic-ui-react'

import { componentInfoContext } from 'docs/src/utils'
import {
  assertBodyContains,
  consoleUtil,
  getComponentName,
  getComponentProps,
  sandbox,
  syntheticEvent,
} from 'test/utils'
import hasValidTypings from './hasValidTypings'

/**
 * Assert Component conforms to guidelines that are applicable to all components.
 * @param {React.Component|Function} Component A component that should conform.
 * @param {Object} [options={}]
 * @param {Object} [options.eventTargets={}] Map of events and the child component to target.
 * @param {Number} [options.nestingLevel=0] The nesting level of the component.
 * @param {boolean} [options.rendersChildren=false] Does this component render any children?
 * @param {boolean} [options.rendersFragmentByDefault=false] Does this component renders React.Fragment by default?
 * @param {boolean} [options.rendersPortal=false] Does this component render a Portal powered component?
 * @param {Object} [options.requiredProps={}] Props required to render Component without errors or warnings.
 */
export default function isConformant(Component, options = {}) {
  const {
    eventTargets = {},
    nestingLevel = 0,
    requiredProps = {},
    rendersChildren = true,
    rendersFragmentByDefault = false,
    rendersPortal = false,
  } = options
  const constructorName = getComponentName(Component)

  it('a valid component should be exported', () => {
    expect(ReactIs.isValidElementType(Component)).to.equal(
      true,
      `Components should export a class or function, got: ${typeof Component}.`,
    )
  })

  it('a component should be a function/class or "displayName" should be defined', () => {
    if (!constructorName) {
      throw new Error(
        [
          'Component is not a named function and does not have a "displayName".',
          'This should help identify it:\n\n',
          `${ReactDOMServer.renderToStaticMarkup(<Component {...requiredProps} />)}`,
        ].join(''),
      )
    }
  })

  const info = componentInfoContext.byDisplayName[constructorName]

  // ----------------------------------------
  // Class and file name
  // ----------------------------------------
  it(`constructor name matches filename "${constructorName}"`, () => {
    constructorName.should.equal(info.filenameWithoutExt)
  })

  // ----------------------------------------
  // Is exported or private
  // ----------------------------------------
  // detect components like: semanticUIReact.H1
  const isTopLevelAPIProp = _.has(semanticUIReact, constructorName)

  // find the apiPath in the semanticUIReact object
  const foundAsSubcomponent = ReactIs.isValidElementType(_.get(semanticUIReact, info.apiPath))

  // require all components to be exported at the top level
  it('is exported at the top level', () => {
    expect(isTopLevelAPIProp).to.equal(
      true,
      [`"${info.displayName}" must be exported at top level.`, 'Export it in `src/index.js`.'].join(
        ' ',
      ),
    )
  })

  if (info.isChild) {
    it('is a static component on its parent', () => {
      expect(foundAsSubcomponent).to.equal(
        true,
        `\`${info.displayName}\` is a child component (is in ${info.repoPath}).` +
          ` It must be a static prop of its parent \`${info.parentDisplayName}\``,
      )
    })
  }

  // ----------------------------------------
  // Props
  // ----------------------------------------
  if (rendersChildren) {
    it('spreads user props', () => {
      const propName = 'data-is-conformant-spread-props'
      const props = { as: rendersFragmentByDefault ? 'div' : undefined, [propName]: true }

      shallow(<Component {...props} {...requiredProps} />).should.have.descendants({
        [propName]: true,
      })
    })
  }

  if (rendersChildren && !rendersPortal) {
    describe('"as" prop (common)', () => {
      it('renders the component as HTML tags or passes "as" to the next component', () => {
        // silence element nesting warnings
        consoleUtil.disableOnce()

        const tags = [
          'a',
          'em',
          'div',
          'h1',
          'h2',
          'h3',
          'h4',
          'h5',
          'h6',
          'i',
          'p',
          'span',
          'strong',
        ]
        try {
          tags.forEach((tag) => {
            shallow(<Component {...requiredProps} as={tag} />, {
              autoNesting: true,
              nestingLevel,
            }).should.have.tagName(tag)
          })
        } catch (err) {
          tags.forEach((tag) => {
            const wrapper = shallow(<Component {...requiredProps} as={tag} />, {
              autoNesting: true,
              nestingLevel,
            })
            wrapper.type().should.not.equal(Component)
            wrapper.should.have.prop('as', tag)
          })
        }
      })

      it('renders as a functional component or passes "as" to the next component', () => {
        const MyComponent = () => null

        try {
          shallow(<Component {...requiredProps} as={MyComponent} />, {
            autoNesting: true,
            nestingLevel,
          })
            .type()
            .should.equal(MyComponent)
        } catch (err) {
          const wrapper = shallow(<Component {...requiredProps} as={MyComponent} />)
          wrapper.type().should.not.equal(Component)
          wrapper.should.have.prop('as', MyComponent)
        }
      })

      it('renders as a ReactClass or passes "as" to the next component', () => {
        // eslint-disable-next-line react/prefer-stateless-function
        class MyComponent extends React.Component {
          render() {
            return <div data-my-react-class />
          }
        }

        try {
          shallow(<Component {...requiredProps} as={MyComponent} />, {
            autoNesting: true,
            nestingLevel,
          })
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

        shallow(<Component {...requiredProps} as={MyComponent} data-extra-prop='foo' />, {
          autoNesting: true,
          nestingLevel,
        }).should.have.descendants('[data-extra-prop="foo"]')
      })
    })
  }

  describe('handles props', () => {
    const componentProps = getComponentProps(Component)

    it('defines handled props in Component.handledProps', () => {
      componentProps.should.have.any.keys('handledProps')
      componentProps.handledProps.should.be.an('array')
    })

    it('Component.handledProps includes all handled props', () => {
      const computedProps = _.union(
        componentProps.autoControlledProps,
        _.keys(componentProps.defaultProps),
        _.keys(componentProps.propTypes),
      )
      const expectedProps = _.uniq(computedProps).sort()

      componentProps.handledProps.should.to.deep.equal(
        expectedProps,
        'It seems that not all props were defined in Component.handledProps, you need to check that they are equal ' +
          'to the union of Component.autoControlledProps and keys of Component.defaultProps and Component.propTypes',
      )
    })
  })

  // ----------------------------------------
  // Events
  // ----------------------------------------
  if (rendersChildren && !rendersPortal) {
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

          consoleUtil.disableOnce()
          const wrapper = mount(
            <Component as={rendersFragmentByDefault ? 'div' : undefined} {...props} />,
          )

          const eventTarget = eventTargets[listenerName]
            ? wrapper.find(eventTargets[listenerName])
            : wrapper.find('[data-simulate-event-here]').hostNodes()

          eventTarget.simulate(eventName, eventShape)

          // give event listeners opportunity to cleanup
          if (wrapper.instance() && wrapper.instance().componentWillUnmount) {
            wrapper.instance().componentWillUnmount()
          }

          // <Dropdown onBlur={handleBlur} />
          //                   ^ was not called once on "blur"
          const leftPad = ' '.repeat(info.displayName.length + listenerName.length + 3)

          handlerSpy.calledOnce.should.equal(
            true,
            `<${info.displayName} ${listenerName}={${handlerName}} />\n` +
              `${leftPad} ^ was not called once on "${eventName}".` +
              'You may need to hoist your event handlers up to the root element.\n',
          )

          let expectedArgs = [eventShape]
          let errorMessage = 'was not called with (event)'

          if (_.has(Component.propTypes, listenerName)) {
            expectedArgs = [eventShape, props]
            errorMessage = 'was not called with (event, data)'
          }

          // A handled should be called once
          handlerSpy.should.have.been.calledOnce()

          // Components should return the event first, then any data
          handlerSpy.calledWithMatch(...expectedArgs).should.equal(
            true,
            [
              `<${info.displayName} ${listenerName}={${handlerName}} />\n`,
              `${leftPad} ^ ${errorMessage}`,
              'It was called with args:',
              //       JSON.stringify(handlerSpy.args, null, 2),
            ].join('\n'),
          )
        })
      })
    })
  }

  // ----------------------------------------
  // Has no deprecated _meta
  // ----------------------------------------
  describe('_meta', () => {
    it('does not exist', () => {
      expect(Component._meta).to.be.undefined()
    })
  })

  // ----------------------------------------
  // Handles className
  // ----------------------------------------
  if (_.has(Component.propTypes, 'className')) {
    if (rendersChildren) {
      describe('className (common)', () => {
        it(`has the Semantic UI className "${info.componentClassName}"`, () => {
          const wrapper = render(<Component {...requiredProps} />)
          // don't test components with no className at all (i.e. MessageItem)
          if (wrapper.prop('className')) {
            wrapper.should.have.className(info.componentClassName)
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

            const wrapper = mount(<Component {...requiredProps} className={className} />, {
              attachTo: mountNode,
            })
            wrapper.setProps({ open: true })

            // portals/popups/etc may render the component to somewhere besides descendants
            // we look for the component anywhere in the DOM
            assertBodyContains(`.${className}`)

            wrapper.detach()
            document.body.removeChild(mountNode)
          } else {
            shallow(
              <Component
                as={rendersFragmentByDefault ? 'div' : undefined}
                {...requiredProps}
                className={className}
              />,
              {
                autoNesting: true,
                nestingLevel,
              },
            ).should.have.className(className)
          }
        })

        it("user's className does not override the default classes", () => {
          const defaultClasses = shallow(<Component {...requiredProps} />, {
            autoNesting: true,
            nestingLevel,
          }).prop('className')

          if (!defaultClasses) return

          const userClasses = faker.hacker.verb()
          const mixedClasses = shallow(<Component {...requiredProps} className={userClasses} />, {
            autoNesting: true,
            nestingLevel,
          }).prop('className')

          defaultClasses.split(' ').forEach((defaultClass) => {
            mixedClasses.should.include(
              defaultClass,
              [
                'Make sure you are using the `getUnhandledProps` util to spread the `rest` props.',
                'This may also be of help: https://facebook.github.io/react/docs/transferring-props.html.',
              ].join(' '),
            )
          })
        })
      })
    }
  }

  // ----------------------------------------
  // Test typings
  // ----------------------------------------
  hasValidTypings(Component, info, options)
}
