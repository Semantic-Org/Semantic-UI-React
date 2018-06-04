/**
 * Retrieve hash string from location path
 * @param {string} hash
 */
const getFormattedHash = hash => (hash || '').replace('#', '')

export default getFormattedHash
