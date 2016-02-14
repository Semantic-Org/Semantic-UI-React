import _ from 'lodash'
import stardust from 'stardust'
import META from '../../src/utils/Meta'
import componentInfo from '../utils/componentInfo'

describe('stardust (index.js)', () => {
  _.each(componentInfo, (info) => {
    const { constructorName, subComponentName } = info
    const isPrivate = META.isPrivate(constructorName)

    const isStardustProp =
      _.has(stardust, constructorName) || // stardust.H1
      _.has(stardust, subComponentName)   // stardust.MenuItem (being deprecated)

    const isSubComponent =
      _.some(stardust, constructorName) ||  // stardust.Form
      _.some(stardust, subComponentName)    // stardust.Form.Field (ie FormField component)

    // TODO: why is this not failing tests, Statistics are not exposed in index.js
    if (constructorName === 'Statistics') {
      /* eslint-disable */
      debugger
      /* eslint-enable */
    }

    if (isPrivate) {
      it(`does not expose private component "${constructorName}"`, () => {
        expect(!isStardustProp).to.equal(true,
          `"${constructorName}" is private (starts with  "_").` +
          ` It cannot be a key on the stardust object`
        )

        expect(!isSubComponent).to.equal(true,
          `"${constructorName}" is private (starts with "_").` +
          ` It cannot be a static prop of another component (sub-component)`
        )
      })
    }

    if (!isPrivate) {
      it(`exposes public component "${constructorName}"`, () => {
        expect(isStardustProp || isSubComponent).to.equal(true,
          `"${constructorName}" must be:` +
          ` a key on stardust` +
          ` || key on another component (sub-component)` +
          ` || private (start with "_")`
        )
      })
    }
  })
})
