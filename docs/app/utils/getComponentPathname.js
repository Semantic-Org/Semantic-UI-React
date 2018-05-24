import _ from 'lodash'

import componentInfoContext from './componentInfoContext'

/**
 * Returns a pathname for a given component.
 *
 * @param {string|function} ComponentOrName
 * @returns {string}
 */
const getComponentPathname = (ComponentOrName) => {
  const info =
    typeof ComponentOrName === 'string'
      ? componentInfoContext.byDisplayName[ComponentOrName]
      : componentInfoContext.fromComponent(ComponentOrName)

  return `/${info.type}s/${_.kebabCase(info.displayName)}`
}

export default getComponentPathname
