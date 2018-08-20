import _ from 'lodash/fp'
import examplePathToHash from './examplePathToHash'

/**
 * Check whether given hash is old or new, redirect to new hash in case of old one
 * @param {string} hash
 */
const isOldHash = (hash) => {
  if (!hash) return false

  const [firstPart] = hash.split('-') || []

  if (!firstPart) return false

  return !_.includes(firstPart, ['types', 'states', 'variations'])
}

/**
 * Retrieve hash string from location path
 * @param {string[]} exampleKeys
 * @param {string} hash
 */
const getFormattedHash = (exampleKeys, hash) => {
  if (process.env.NODE_ENV !== 'production') {
    if (!Array.isArray(exampleKeys)) {
      throw new Error(
        `getFormattedHash did not receive exampleKeys array, got: ${typeof exampleKeys}`,
      )
    }
    if (typeof hash !== 'string') {
      throw new Error(`getFormattedHash did not receive hash string, got: ${typeof hash}`)
    }
  }
  const hashString = (hash || '').replace('#', '')

  if (isOldHash(hashString)) {
    const filename = `${_.startCase(hashString).replace(/\s/g, '')}`
    const completeFilename = `/${filename}.js`
    const examplePath = _.find(key => _.endsWith(completeFilename, key), exampleKeys)

    // found old to new hashString match
    if (examplePath) {
      return examplePathToHash(examplePath)
    }

    return null
  }

  return hashString
}

export default getFormattedHash
