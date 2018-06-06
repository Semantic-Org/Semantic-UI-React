import _ from 'lodash'

/**
 * Assert a component exposes other components as (static properties).
 * @param {React.Component|Function} Component The Component.
 * @param {React.Component[]} subcomponents Array of components that should exist on Component.
 */
export default (Component, subcomponents) => {
  const staticValues = _.values(Component)

  _.each(subcomponents, (subcomponent) => {
    it(`has sub component ${subcomponent._meta.name}`, () => {
      staticValues.should.contain(subcomponent)
    })
  })
}
