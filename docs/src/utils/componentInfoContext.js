import isBrowser from '../../../src/lib/isBrowser'

/**
 * Get the Webpack Context for all Component.info.json files.
 */
const componentInfoContext = isBrowser()
  ? require.context('docs/src/componentInfo', true, /\.info\.json$/)
  : {}

if (isBrowser()) {
  const keys = componentInfoContext.keys()
  const infoObjects = keys.map(componentInfoContext)

  componentInfoContext.byAPIPath = infoObjects.reduce((acc, next) => {
    acc[next.apiPath] = next
    return acc
  }, {})

  componentInfoContext.byDisplayName = infoObjects.reduce((acc, next) => {
    acc[next.displayName] = next
    return acc
  }, {})

  componentInfoContext.fromComponent = (Component) => {
    const displayName = Component.displayName || Component.name

    return componentInfoContext.byDisplayName[displayName]
  }

  componentInfoContext.parents = infoObjects.filter(({ isParent }) => isParent)
}

export default componentInfoContext
