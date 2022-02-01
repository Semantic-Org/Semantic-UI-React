import React from 'react'
import helpers from './commonHelpers'

/**
 * Assert a component adds the Semantic UI "ui" className.
 * @param {React.Component|Function} Component The Component.
 * @param {Object} [options={}]
 * @param {Object} [options.requiredProps={}] Props required to render the component.
 */
export default (Component, options = {}) => {
  const { requiredProps = {} } = options
  const { assertRequired } = helpers('hasUIClassName', Component)

  it('has the "ui" className', () => {
    assertRequired(Component, 'a `Component`')
    const wrapper = mount(<Component {...requiredProps} />)

    wrapper.should.have.className('ui')
  })
}
