import _ from 'lodash'
import React, { createElement } from 'react'

import { createShorthand } from 'src/lib'
import { consoleUtil } from 'test/utils'
import { noDefaultClassNameFromProp } from './classNameHelpers'
import helpers from './commonHelpers'

const shorthandComponentName = ShorthandComponent => {
  if (typeof ShorthandComponent === 'string') return ShorthandComponent
  return _.get(ShorthandComponent, '_meta.name') || ShorthandComponent.displayName || ShorthandComponent.name
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
export default (Component, options = {}) => {
  const {
    alwaysPresent,
    mapValueToProps,
    propKey,
    ShorthandComponent,
    shorthandDefaultProps = {},
    requiredProps = {},
  } = options
  const { assertRequired } = helpers('implementsShorthandProp', Component)

  describe(`${propKey} shorthand prop (common)`, () => {
    assertRequired(Component, 'a `Component`')
    assertRequired(_.isPlainObject(options), 'an `options` object')
    assertRequired(propKey, 'a `propKey`')
    assertRequired(ShorthandComponent, 'a `ShorthandComponent`')

    const name = shorthandComponentName(ShorthandComponent)
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
      noDefaultClassNameFromProp(Component, propKey, [], options)

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
