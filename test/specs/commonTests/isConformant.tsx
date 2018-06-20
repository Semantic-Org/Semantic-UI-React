import faker from 'faker'
import _ from 'lodash'
import React from 'react'
import { shallow, mount } from 'enzyme'
import ReactDOMServer from 'react-dom/server'

import { assertBodyContains, consoleUtil, syntheticEvent } from 'test/utils'
import helpers from './commonHelpers'

import * as stardust from '../../../src/'
import Provider from '../../../src/components/Provider'

/**
 * Assert Component conforms to guidelines that are applicable to all components.
 * @param {React.Component|Function} Component A component that should conform.
 * @param {Object} [options={}]
 * @param {Object} [options.eventTargets={}] Map of events and the child component to target.
 * @param {boolean} [options.rendersPortal=false] Does this component render a Portal powered component?
 * @param {Object} [options.requiredProps={}] Props required to render Component without errors or warnings.
 */
export default (Component, options: any = {}) => {
  const { eventTargets = {}, requiredProps = {}, rendersPortal = false } = options
  const { throwError } = helpers('isConformant', Component)

  const componentType = typeof Component

  // make sure components are properly exported
  if (componentType !== 'function') {
    throwError(`Components should export a class or function, got: ${componentType}.`)
  }

  const renderWithProvider = testComponent => (
    <Provider siteVariables={{}}>{testComponent}</Provider>
  )

  const getTestingRenderedComponent = mountedElement => {
    let wrapper = mountedElement
    while (wrapper.name() !== Component.wrappedComponent) {
      wrapper = wrapper.childAt(0)
    }
    return wrapper
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

  // ----------------------------------------
  // Component info
  // ----------------------------------------
  // This is pretty ugly because:
  // - jest doesn't support custom error messages
  // - jest will run all test
  const infoJSONPath = `docs/src/componentInfo/${Component.wrappedComponent}.info.json`

  let info

  try {
    info = require(infoJSONPath)
  } catch (err) {
    // handled in the test() below
    test('component info file exists', () => {
      throw new Error(
        [
          '!! ==========================================================',
          `!! Missing ${infoJSONPath}.`,
          '!! Run `yarn test` or `yarn test:watch` again to generate one.',
          '!! ==========================================================',
        ].join('\n'),
      )
    })
    return
  }

  // ----------------------------------------
  // Component and file name
  // ----------------------------------------
  test(`wrappedComponent property matches filename "${Component.wrappedComponent}"`, () => {
    expect(Component.wrappedComponent).toEqual(info.filenameWithoutExt)
  })

  // ----------------------------------------
  // Is exported or private
  // ----------------------------------------
  // detect components like: stardust.H1
  const isTopLevelAPIProp = _.has(stardust, Component.wrappedComponent)

  // find the apiPath in the stardust object
  const foundAsSubcomponent = _.isFunction(_.get(stardust, info.apiPath))

  // require all components to be exported at the top level
  test('is exported at the top level', () => {
    const message = [
      `'${info.displayName}' must be exported at top level.`,
      "Export it in 'src/index.js'.",
    ].join(' ')

    expect({ isTopLevelAPIProp, message }).toEqual({
      message,
      isTopLevelAPIProp: true,
    })
  })

  if (info.isChild) {
    test('is a static component on its parent', () => {
      const message =
        `'${info.displayName}' is a child component (is in ${info.repoPath}).` +
        ` It must be a static prop of its parent '${info.parentDisplayName}'`
      expect({ foundAsSubcomponent, message }).toEqual({
        message,
        foundAsSubcomponent: true,
      })
    })
  }

  // ----------------------------------------
  // Props
  // ----------------------------------------
  test('spreads user props', () => {
    const propName = 'data-is-conformant-spread-props'
    const props = { [propName]: true }

    const component = getTestingRenderedComponent(
      mount(renderWithProvider(<Component {...requiredProps} {...props} />)),
    )

    // The component already has the prop, so we are testing if it's children also have the props,
    // that is why we are testing if it is grater then 1
    expect(component.find(props).length).toBeGreaterThan(1)
  })

  if (!rendersPortal) {
    describe('"as" prop (common)', () => {
      test('renders the component as HTML tags or passes "as" to the next component', () => {
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

        tags.forEach(tag => {
          const wrapper = mount(renderWithProvider(<Component {...requiredProps} as={tag} />))
          const component = getTestingRenderedComponent(wrapper)

          try {
            expect(component.childAt(0).is(tag)).toEqual(true)
          } catch (err) {
            expect(component.childAt(0).type()).not.toEqual(Component)
            expect(component.childAt(0).prop('as')).toEqual(tag)
          }
        })
      })

      test('renders as a functional component or passes "as" to the next component', () => {
        const MyComponent = () => null

        const wrapper = mount(renderWithProvider(<Component {...requiredProps} as={MyComponent} />))
        const component = getTestingRenderedComponent(wrapper)

        try {
          expect(component.childAt(0).type()).toEqual(MyComponent)
        } catch (err) {
          expect(component.childAt(0).type()).not.toEqual(Component)
          expect(component.childAt(0).prop('as')).toEqual(MyComponent)
        }
      })

      test('renders as a ReactClass or passes "as" to the next component', () => {
        class MyComponent extends React.Component {
          render() {
            return <div data-my-react-class />
          }
        }

        const wrapper = mount(renderWithProvider(<Component {...requiredProps} as={MyComponent} />))
        const component = getTestingRenderedComponent(wrapper)

        try {
          expect(component.childAt(0).type()).toEqual(MyComponent)
        } catch (err) {
          expect(component.childAt(0).type()).not.toEqual(Component)
          expect(component.childAt(0).prop('as')).toEqual(MyComponent)
        }
      })

      test('passes extra props to the component it is renders as', () => {
        const MyComponent = () => null
        const wrapper = mount(
          renderWithProvider(
            <Component {...requiredProps} as={MyComponent} data-extra-prop="foo" />,
          ),
        )

        expect(wrapper.find('MyComponent[data-extra-prop="foo"]').length).toBeGreaterThan(0)
      })
    })
  }

  describe('handles props', () => {
    test('defines handled props in Component.handledProps', () => {
      expect(Component.handledProps).toBeDefined()
      expect(Array.isArray(Component.handledProps)).toEqual(true)
    })

    test('Component.handledProps includes all handled props', () => {
      const computedProps = _.union(
        Component.wrappedComponentAutoControlledProps,
        _.keys(Component.wrappedComponentDefaultProps),
        _.keys(Component.wrappedComponentPropTypes),
      )
      const expectedProps = _.uniq(computedProps).sort()

      const message =
        'It seems that not all props were defined in Component.handledProps, you need' +
        ' to check that they are equal to the union of Component.wrappedComponentAutoControlledProps and keys of ' +
        'Component.wrappedComponentDefaultProps and Component.propTypes'

      expect({
        message,
        handledProps: Component.handledProps,
      }).toEqual({
        message,
        handledProps: expectedProps,
      })
    })
  })

  // ----------------------------------------
  // Events
  // ----------------------------------------

  test('handles events transparently', () => {
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

        const handlerSpy = jest.fn()
        const props = {
          ...requiredProps,
          [listenerName]: handlerSpy,
          'data-simulate-event-here': true,
        }

        const wrapper = mount(renderWithProvider(<Component {...props} />))
        const component = getTestingRenderedComponent(wrapper)

        const eventTarget = eventTargets[listenerName]
          ? component.find(eventTargets[listenerName]).hostNodes()
          : component.find('[data-simulate-event-here]').hostNodes()

        if (eventTarget.length === 0) {
          throw new Error(
            'The event prop was not delegate to the children. You probably ' +
              'forgot to use `getUnhandledProps` util to spread the `rest` props.',
          )
        }
        const customHandler = eventTarget.prop([listenerName])

        if (customHandler) {
          customHandler(eventShape)
        } else {
          return
        }

        // give event listeners opportunity to cleanup
        if (wrapper.instance() && wrapper.instance().componentWillUnmount) {
          wrapper.instance().componentWillUnmount()
        }

        // <Dropdown onBlur={handleBlur} />
        //                   ^ was not called once on "blur"
        const leftPad = ' '.repeat(info.displayName.length + listenerName.length + 3)

        try {
          expect(handlerSpy).toHaveBeenCalled()
        } catch (err) {
          throw new Error(
            `<${info.displayName} ${listenerName}={${handlerName}} />\n` +
              `${leftPad} ^ was not called once on "${eventName}".` +
              'You may need to hoist your event handlers up to the root element.\n',
          )
        }

        let expectedArgs = [eventShape]
        let errorMessage = 'was not called with (event)'

        if (_.has(Component.wrappedComponentPropTypes, listenerName)) {
          expectedArgs = [eventShape, component.props()]
          errorMessage = 'was not called with (event, data)'
        }

        // Components should return the event first, then any data
        try {
          expect(handlerSpy).toHaveBeenLastCalledWith(...expectedArgs)
        } catch (err) {
          throw new Error(
            [
              `<${info.displayName} ${listenerName}={${handlerName}} />\n`,
              `${leftPad} ^ ${errorMessage}`,
              'It was called with args:',
              JSON.stringify(handlerSpy.args, null, 2),
            ].join('\n'),
          )
        }
      })
    })
  })

  // ----------------------------------------
  // Has no deprecated _meta
  // ----------------------------------------
  describe('_meta', () => {
    test('does not exist', () => {
      expect(Component._meta).toBeUndefined()
    })
  })

  // ----------------------------------------
  // Handles className
  // ----------------------------------------
  describe('className (common)', () => {
    test(`has the Stardust className "${info.componentClassName}"`, () => {
      const wrapper = mount(renderWithProvider(<Component {...requiredProps} />))
      const component = getTestingRenderedComponent(wrapper)

      // only test components that implement className
      if (component.childAt(0).prop('className')) {
        expect(
          _.includes(component.childAt(0).prop('className'), `${info.componentClassName}`),
        ).toEqual(true)
      }
    })

    test("applies user's className to root component", () => {
      const className = 'is-conformant-class-string'

      // Portal powered components can render to two elements, a trigger and the actual component
      // The actual component is shown when the portal is open
      // If a trigger is rendered, open the portal and make assertions on the portal element
      if (rendersPortal) {
        const mountNode = document.createElement('div')
        document.body.appendChild(mountNode)

        const wrapper = mount(
          renderWithProvider(<Component {...requiredProps} className={className} />),
          {
            attachTo: mountNode,
          },
        )
        wrapper.setProps({ open: true })

        // portals/popups/etc may render the component to somewhere besides descendants
        // we look for the component anywhere in the DOM
        assertBodyContains(`.${className}`)

        wrapper.detach()
        document.body.removeChild(mountNode)
      } else {
        const wrapper = mount(
          renderWithProvider(<Component {...requiredProps} className={className} />),
        )
        expect(
          _.includes(
            getTestingRenderedComponent(wrapper)
              .childAt(0)
              .prop('className'),
            className,
          ),
        ).toEqual(true)
      }
    })

    test("user's className does not override the default classes", () => {
      const wrapper = mount(renderWithProvider(<Component {...requiredProps} />))
      const defaultClasses = getTestingRenderedComponent(wrapper)
        .childAt(0)
        .prop('className')

      if (!defaultClasses) return

      const userClasses = faker.hacker.verb()
      const wrapperWithCustomClasses = mount(
        renderWithProvider(<Component {...requiredProps} className={userClasses} />),
      )
      const mixedClasses = getTestingRenderedComponent(wrapperWithCustomClasses)
        .childAt(0)
        .prop('className')

      const message = [
        'Make sure you are using the `getUnhandledProps` util to spread the `rest` props.',
        'This may also be of help: https://facebook.github.io/react/docs/transferring-props.html.',
      ].join(' ')

      defaultClasses.split(' ').forEach(defaultClass => {
        expect({ message, result: _.includes(mixedClasses, defaultClass) }).toEqual({
          message,
          result: true,
        })
      })
    })
  })
}
