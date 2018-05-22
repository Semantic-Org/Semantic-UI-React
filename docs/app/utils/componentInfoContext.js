import _ from 'lodash'

/**
 * Get the Webpack Context for all Component.info.json files.
 */
const componentInfoContext = require.context('../../../src/', true, /\.info\.json$/)

componentInfoContext.fromComponentName = (name) => {
  const regExp = new RegExp(`/${name}.info.json$`)

  const key = componentInfoContext.keys().find(k => regExp.test(k))

  return key ? componentInfoContext(key) : null
}

componentInfoContext.fromComponent = (Component) => {
  const name = _.get(Component, 'prototype.constructor.name')

  return componentInfoContext.fromComponentName(name)
}

export default componentInfoContext
