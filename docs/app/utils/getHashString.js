import _ from 'lodash'

/**
 * Retrieve hash string from location path
 * @param {string} hash
 */
const getHashString = hash => _.last((hash || '').split('#'))

export default getHashString
