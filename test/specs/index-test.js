import _ from 'lodash'
import path from 'path'
import stardust from 'stardust'
import META from '../../src/utils/Meta'

const componentCtx = require.context(
  '../../src/',
  true,
  /(addons|collections|elements|modules|views).*\.js$/
)

const componentNames = _.map(componentCtx.keys(), key => {
  return path.basename(key).replace('.js', '')
})

describe('stardust (index.js)', () => {
  _.each(componentNames, name => {
    const shortName = _.words(name)[1]                                           // => FormField => Field
    const isPrivate = META.isPrivate(name)
    const isStardustProp = _.has(stardust, name) || _.has(stardust, shortName)   // => stardust.H1
    const isSubComponent = _.some(stardust, name)                                // => stardust.Header.H1

    if (isPrivate) {
      it(`does not expose private component "${name}"`, () => {
        expect(!isStardustProp).to.equal(true,
          `"${name}" is private (starts with  "_"), it cannot be a key on the stardust object`
        )

        expect(!isSubComponent).to.equal(true,
          `"${name}" is private (starts with "_"), it cannot be a static prop of another component (sub-component)`
        )
      })
    }

    if (!isPrivate) {
      it(`exposes public component "${name}"`, () => {
        expect(!isStardustProp && !isSubComponent).to.equal(false,
          `"${name}" must be: a key on stardust || key on another component (sub-component) || private (start with "_")`
        )
      })
    }
  })
})
