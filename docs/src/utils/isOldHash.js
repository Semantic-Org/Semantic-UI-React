/**
 * Check whether given hash is old or new, redirect to new hash in case of old one
 * @param {string} hash
 */
const isOldHash = (hash) => {
  const expectedTypes = ['types', 'states', 'variations']
  const hashParts = hash.split('-') || []
  return !(expectedTypes.findIndex(item => item === hashParts[0]) !== -1)
}

export default isOldHash
