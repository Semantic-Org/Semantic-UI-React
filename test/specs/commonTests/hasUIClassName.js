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

    // Heads up! It's a temporary solution until all other components will be wrapped with
    // the new <ElementType> component and withComputedType HOC
    // TODO: Remove this after all components will be updated
    try {
      shallow(<Component {...requiredProps} />)
        .should.have.className('ui')
    } catch (e) {
      shallow(<Component {...requiredProps} />)
        .dive()
        .should.have.className('ui')
    }
  })
}
