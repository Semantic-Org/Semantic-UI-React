import _ from 'lodash'
import { getOriginalComponent } from 'test/utils'

/**
 * Assert a component exposes other components as (static properties).
 * @param {React.Component|Function} RawComponent The Component.
 * @param {React.Component[]} subComponents Array of components that should exist on Component.
 */
export default (RawComponent, subComponents) => {
  // const staticValues = _.values(getOriginalComponent(RawComponent))

  // _.each(subComponents, (rawSubComponent) => {
    // const subComponent = getOriginalComponent(rawSubComponent)
    //
    // it(`has sub component ${subComponent._meta.name}`, () => {
    //   staticValues.should.contain(rawSubComponent)
    // })
  // })
}
