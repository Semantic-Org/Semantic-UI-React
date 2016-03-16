import _ from 'lodash'
import stardust from 'stardust'
import META from '../../src/utils/Meta'
import componentInfo from '../utils/componentInfo'

describe('stardust (index.js)', () => {
  _.each(componentInfo, (info) => {
    const { _meta, constructorName, subComponentName } = info
    const isPrivate = META.isPrivate(constructorName)

    // stardust.H1
    const isStardustProp = _.has(stardust, constructorName)

    // stardust.Form.Field (ie FormField component)
    //
    // only search the 'parent' for the sub component
    // avoids false positives like DropdownItem & MenuItem
    //   which both have sub component names of "Item", and appear
    //   on both Dropdown.Item and Menu.Item (not to mention Stardust.Item)
    const isSubComponent = _.isFunction(_.get(stardust, `[${_meta.parent}][${subComponentName}]`))

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
    } else {
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
