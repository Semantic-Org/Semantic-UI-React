import _ from 'lodash/fp'

import exampleContext from './exampleContext'
import examplePathToHash from './examplePathToHash'
import isOldHash from './isOldHash'

/**
 * get new hash using old
 * @param {string} hash
 */
const getNewHash = (hash) => {
  if (isOldHash(hash)) {
    const fileName = _.startCase(hash).replace(/\s/g, '')
    const str = exampleContext.keys().find(item => item.indexOf(fileName) !== -1)
    // found old to new hash match
    if (str) {
      return examplePathToHash(str.replace(/((\.)(?:[\w]+))|(^\.\/)/g, ''))
    }
  }

  return hash
}

export default getNewHash
