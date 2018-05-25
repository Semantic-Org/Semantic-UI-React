import _ from 'lodash/fp'

import exampleContext from './exampleContext'
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
 * @param {string} hash
 */
const getFormattedHash = (hash) => {
  const hashString = (hash || '').replace('#', '')

  if (isOldHash(hashString)) {
    const filename = `${_.startCase(hashString).replace(/\s/g, '')}`
    const completeFilename = `/${filename}.js`
    const exampleKeys = exampleContext.keys()
    const examplePath = _.find(key => _.endsWith(completeFilename, key), exampleKeys)

    // found old to new hashString match
    if (examplePath) {
      return examplePathToHash(examplePath)
    }
  }

  return hashString
}

export default getFormattedHash
