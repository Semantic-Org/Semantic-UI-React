import _ from 'lodash'

/**
 * Returns a pathname for a given component.
 *
 * @param {object} info - A Component's *.info.json
 * @returns {string}
 */
const getComponentPathname = (info) => `/${info.type}s/${_.kebabCase(info.displayName)}/`

export default getComponentPathname
