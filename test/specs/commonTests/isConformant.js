import faker from 'faker'
import _ from 'lodash'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import {
  assertBodyContains,
  componentInfo,
  consoleUtil,
  nestedShallow,
  syntheticEvent,
} from 'test/utils'
import helpers from './commonHelpers'
import hasValidTypings from './hasValidTypings'

/**
 * Assert Component conforms to guidelines that are applicable to all components.
 * @param {React.Component|Function} Component A component that should conform.
 * @param {Object} [options={}]
 * @param {Object} [options.eventTargets={}] Map of events and the child component to target.
 * @param {Number} [options.nestingLevel=0] The nesting level of the component.
 * @param {boolean} [options.rendersChildren=false] Does this component render any children?
 * @param {boolean} [options.rendersPortal=false] Does this component render a Portal powered component?
 * @param {Object} [options.requiredProps={}] Props required to render Component without errors or warnings.
 */
export default (Component, options = {}) => {
  const {
    eventTargets = {},
    nestingLevel = 0,
    requiredProps = {},
    rendersChildren = true,
    rendersPortal = false,
  } = options
  const { throwError } = helpers('isConformant', Component)

  const componentType = typeof Component

  // make sure components are properly exported
  if (componentType !== 'function') {
    throwError(`Components should export a class or function, got: ${componentType}.`)
  }

  // tests depend on Component constructor names, enforce them
  const constructorName = Component.prototype.constructor.name
  if (!constructorName) {
    throwError(
      [
        'Component is not a named function. This should help identify it:\n\n',
        `${ReactDOMServer.renderToStaticMarkup(<Component />)}`,
      ].join(''),
    )
  }

  const info = componentInfo(constructorName)

  // ----------------------------------------
  // Class and file name
  // ----------------------------------------
  it(`constructor name matches filename "${constructorName}"`, () => {
    expect(constructorName).toBe(info.filenameWithoutExt)
  })

  // ----------------------------------------
  // Props
  // ----------------------------------------
  if (rendersChildren) {
    it('spreads user props', () => {
      const propName = 'data-is-conformant-spread-props'
      const props = { [propName]: true }
      const wrapper = shallow(<Component {...requiredProps} {...props} />)

      expect(wrapper.find(props)).toHaveLength(1)
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
            expect(
              nestedShallow(<Component {...requiredProps} as={tag} />, {
                nestingLevel,
              }).type(),
            ).toBe(tag)
          })
        } catch (err) {
          tags.forEach((tag) => {
            const wrapper = nestedShallow(<Component {...requiredProps} as={tag} />, {
              nestingLevel,
            })

            expect(wrapper.type()).not.toBe(Component)
            expect(wrapper.prop('as')).toBe(tag)
          })
        }
      })

      it('renders as a functional component or passes "as" to the next component', () => {
        const MyComponent = () => null

        try {
          expect(
            nestedShallow(<Component {...requiredProps} as={MyComponent} />, {
              nestingLevel,
            }).type(),
          ).toBe(MyComponent)
        } catch (err) {
          const wrapper = shallow(<Component {...requiredProps} as={MyComponent} />)
          expect(wrapper.type()).not.toBe(Component)
          expect(wrapper.prop('as')).toBe(MyComponent)
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
          expect(
            nestedShallow(<Component {...requiredProps} as={MyComponent} />, {
              nestingLevel,
            }).type(),
          ).toBe(MyComponent)
        } catch (err) {
          const wrapper = shallow(<Component {...requiredProps} as={MyComponent} />)
          expect(wrapper.type()).not.toBe(Component)
          expect(wrapper.prop('as')).toBe(MyComponent)
        }
      })

      it('passes extra props to the component it is renders as', () => {
        const MyComponent = () => null
        const wrapper = nestedShallow(
          <Component {...requiredProps} as={MyComponent} data-extra-prop='foo' />,
          {
            nestingLevel,
          },
        )

        expect(wrapper.find('[data-extra-prop="foo"]')).toHaveLength(1)
      })
    })
  }

  describe('handles props', () => {
    it('defines handled props in Component.handledProps', () => {
      expect(Component).toHaveProperty('handledProps')
      expect(Array.isArray(Component.handledProps)).toBe(true)
    })

    it('Component.handledProps includes all handled props', () => {
      const computedProps = _.union(
        Component.autoControlledProps,
        _.keys(Component.defaultProps),
        _.keys(Component.propTypes),
      )
      const expectedProps = _.uniq(computedProps).sort()

      expect(Component.handledProps).toEqual(expectedProps)
    })
  })

  // ----------------------------------------
  // Events
  // ----------------------------------------
  if (rendersChildren) {
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
          const handlerSpy = jest.fn()
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

          expect(handlerSpy).toHaveBeenCalledTimes(1)
          let expectedArgs = [eventShape]

          if (_.has(Component.propTypes, listenerName)) {
            expectedArgs = [eventShape, expect.objectContaining(props)]
          }

          // Components should return the event first, then any data
          expect(handlerSpy).toHaveBeenCalledWith(...expectedArgs)
        })
      })
    })
  }

  // ----------------------------------------
  // Has no deprecated _meta
  // ----------------------------------------
  describe('_meta', () => {
    it('does not exist', () => {
      expect(Component._meta).toBeUndefined()
    })
  })

  // ----------------------------------------
  // Handles className
  // ----------------------------------------
  if (rendersChildren) {
    describe('className (common)', () => {
      it(`has the Semantic UI className "${info.componentClassName}"`, () => {
        const wrapper = mount(<Component {...requiredProps} />)
        // don't test components with no className at all (i.e. MessageItem)
        if (wrapper.prop('className')) {
          expect(wrapper.hasClass(info.componentClassName)).toBe(true)
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
          expect(
            nestedShallow(<Component {...requiredProps} className={className} />, {
              nestingLevel,
            }).hasClass(className),
          ).toBe(true)
        }
      })

      it("user's className does not override the default classes", () => {
        const defaultClasses = nestedShallow(<Component {...requiredProps} />, {
          nestingLevel,
        }).prop('className')

        if (!defaultClasses) return

        const userClasses = faker.hacker.verb()
        const mixedClasses = nestedShallow(
          <Component {...requiredProps} className={userClasses} />,
          { nestingLevel },
        ).prop('className')

        defaultClasses.split(' ').forEach((defaultClass) => {
          expect(mixedClasses).toContain(defaultClass)
        })
      })
    })
  }
  // ----------------------------------------
  // Test typings
  // ----------------------------------------
  hasValidTypings(Component, options)
}
