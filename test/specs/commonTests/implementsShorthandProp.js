import _ from 'lodash'
import React from 'react'
import ReactIs from 'react-is'

import { createShorthand } from 'src/lib'
import { consoleUtil, getComponentName } from 'test/utils'
import { noDefaultClassNameFromProp } from './classNameHelpers'
import helpers from './commonHelpers'

const shorthandComponentName = (ShorthandComponent) => {
  if (typeof ShorthandComponent === 'string') {
    return ShorthandComponent
  }

  return getComponentName(ShorthandComponent)
}

/**
 * Assert that a Component correctly implements a shorthand prop.
 *
 * @param {function} Component The component to test.
 * @param {object} options
 * @param {string} options.propKey The name of the shorthand prop.
 * @param {string|function} options.ShorthandComponent The component that should be rendered from the shorthand value.
 * @param {boolean} [options.alwaysPresent] Whether or not the shorthand exists by default.
 * @param {boolean} [options.assertExactMatch] Selects an assertion method, `contain` will be used if true.
 * @param {boolean} [options.autoGenerateKey=false] Whether or not automatic key generation is
 *   allowed for the shorthand component.
 * @param {function} options.mapValueToProps A function that maps a primitive value to the Component props.
 * @param {Boolean} [options.parentIsFragment=false] A flag that shows the type of the Component to test.
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 * @param {boolean} [options.rendersPortal=false] Does this component render a Portal powered component?
 * @param {Object} [options.shorthandDefaultProps] Default props for the shorthand component.
 * @param {Object} [options.shorthandOverrideProps] Override props for the shorthand component.
 */
export default (Component, options = {}) => {
  const {
    alwaysPresent,
    assertExactMatch = true,
    autoGenerateKey = true,
    mapValueToProps,
    parentIsFragment = false,
    rendersPortal = false,
    propKey,
    shorthandDefaultProps = {},
    shorthandOverrideProps = {},
    requiredProps = {},
  } = options
  const { assertRequired } = helpers('implementsShorthandProp', Component)

  const assertMethod = assertExactMatch ? 'equals' : 'matchesElement'
  // Heads up!
  // Enzyme does handle properly React.memo() in find and always returns inner component
  // That's why we should unwrap it, otherwise "wrapper.find(Component)" is not equal to "Component" 💥
  const ShorthandComponent =
    options.ShorthandComponent.$$typeof === ReactIs.Memo
      ? options.ShorthandComponent.type
      : options.ShorthandComponent

  describe(`${propKey} shorthand prop (common)`, () => {
    let wrapper

    afterEach(() => {
      if (wrapper && wrapper.unmount) wrapper.unmount()
    })

    assertRequired(Component, 'a `Component`')
    assertRequired(_.isPlainObject(options), 'an `options` object')
    assertRequired(propKey, 'a `propKey`')
    assertRequired(ShorthandComponent, 'a `ShorthandComponent`')

    const name = shorthandComponentName(ShorthandComponent)
    const assertValidShorthand = (value) => {
      const expectedShorthandElement = createShorthand(ShorthandComponent, mapValueToProps, value, {
        defaultProps: shorthandDefaultProps,
        overrideProps: shorthandOverrideProps,
        autoGenerateKey,
      })
      wrapper = mount(React.createElement(Component, { ...requiredProps, [propKey]: value }))

      const result = wrapper.find(ShorthandComponent)

      expect(result[assertMethod](expectedShorthandElement)).to.equal(true)

      // Enzyme's .key() method is not consistent with React for elements with
      // no key (`undefined` vs `null`), so use the underlying element instead
      // Will fail if more than one element of this type is found
      if (autoGenerateKey) {
        expect(result.getElement().key).to.equal(expectedShorthandElement.key, "key doesn't match")
      }
    }

    if (alwaysPresent || (Component.defaultProps && Component.defaultProps[propKey])) {
      it(`has default ${name} when not defined`, () => {
        wrapper = mount(React.createElement(Component, requiredProps))

        wrapper.should.have.descendants(ShorthandComponent)
      })
    } else {
      if (!parentIsFragment && !rendersPortal) {
        noDefaultClassNameFromProp(Component, propKey, [], options)
      }

      it(`has no ${name} when not defined`, () => {
        wrapper = mount(React.createElement(Component, requiredProps))

        wrapper.should.not.have.descendants(ShorthandComponent)
      })
    }

    if (!alwaysPresent) {
      it(`has no ${name} when null`, () => {
        const element = React.createElement(Component, { ...requiredProps, [propKey]: null })
        wrapper = mount(element)

        wrapper.should.not.have.descendants(ShorthandComponent)
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
