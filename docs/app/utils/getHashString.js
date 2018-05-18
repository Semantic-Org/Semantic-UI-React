/**
 * Retrieve hash string from location path
 * @param {string} hash
 */
const getHashString = hash => (hash || '').replace('#', '')

export default getHashString
