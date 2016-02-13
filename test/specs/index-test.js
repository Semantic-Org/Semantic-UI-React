/* eslint-disable */
import _ from 'lodash'
import path from 'path'
import stardust from 'stardust'
import META from '../../src/utils/Meta'

const componentCtx = require.context(
  '../../src/',
  true,
  /(addons|collections|elements|modules|views).*\.js$/
)

console.log(componentCtx.keys().map(componentCtx))
const componentFilenames = _.map(componentCtx.keys(), key => {
  return path.basename(key, '.js')
})

describe('stardust (index.js)', () => {
  _.each(componentFilenames, filename => {
    const nameWithoutPrefix = _.words(filename).splice(1).join('')                           // => HeaderH1 => H1
    const isPrivate = META.isPrivate(filename)
    const isStardustProp = _.has(stardust, filename) || _.has(stardust, nameWithoutPrefix)   // => stardust.H1
    const isSubComponent = _.some(stardust, filename) || _.some(stardust, nameWithoutPrefix) // => stardust.Header.H1

    if (filename === 'Statistics') {
      console.log(stardust)
      // debugger
    }

    if (isPrivate) {
      it(`does not expose private component "${filename}"`, () => {
        expect(!isStardustProp).to.equal(true,
          `"${filename}" is private (starts with  "_"), it cannot be a key on the stardust object`
        )

        expect(!isSubComponent).to.equal(true,
          `"${filename}" is private (starts with "_"), it cannot be a static prop of another component (sub-component)`
        )
      })
    }

    if (!isPrivate) {
      it(`exposes public component "${filename}"`, () => {
        expect(isStardustProp || isSubComponent).to.equal(true,
          `"${filename}" must be: a key on stardust || key on another component (sub-component) || private (start with "_")`
        )
      })
    }
  })
})
