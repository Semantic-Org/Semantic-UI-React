// Heads Up!
//
// Do not replace this with `export * from '...'` syntax.
// We need to export an object here for browser builds.
// Otherwise, we end up with every component on the window.
import * as addons from './addons'
import * as collections from './collections'
import * as elements from './elements'
import * as modules from './modules'
import * as views from './views'

module.exports = {
  ...addons,
  ...collections,
  ...elements,
  ...modules,
  ...views,
}
