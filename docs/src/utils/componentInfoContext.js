/**
 * Get the Webpack Context for all Component.info.json files.
 */
const componentInfoContext = require.context(
  '../../../docs/src/componentInfo',
  true,
  /\.info\.json$/,
)

const keys = componentInfoContext.keys()
const infoObjects = keys.map(componentInfoContext)

componentInfoContext.byDisplayName = infoObjects.reduce((acc, next) => {
  acc[next.displayName] = next
  return acc
}, {})

componentInfoContext.fromComponent = (Component) => {
  const displayName = Component.displayName || Component.name

  return componentInfoContext.byDisplayName[displayName]
}

componentInfoContext.parents = infoObjects.filter(({ isParent }) => isParent)

export default componentInfoContext
