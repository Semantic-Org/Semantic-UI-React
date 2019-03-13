import React from 'react'
import helpers from './commonHelpers'

/**
 * Assert a component adds the Semantic UI "ui" className.
 * @param {React.Component|Function} Component The Component.
 * @param {Object} [options={}]
 * @param {Number} [options.nestingLevel=0] The nesting level of the component.
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export default (Component, options = {}) => {
  const { nestingLevel = 0, requiredProps = {} } = options
  const { assertRequired } = helpers('hasUIClassName', Component)

  it('has the "ui" className', () => {
    assertRequired(Component, 'a `Component`')

    shallow(<Component {...requiredProps} />, {
      autoNesting: true,
      nestingLevel,
    }).should.have.className('ui')
  })
}
