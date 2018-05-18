import _ from 'lodash/fp'

import exampleContext from './exampleContext'
import createComponentHash from './createComponentHash'

/**
 * get new hash using old
 * @param {string} hash
 */
const getNewHash = (hash) => {
  const isOldHash = true
  if (isOldHash) {
    const fileName = _.startCase(hash).replace(/\s/g, '')
    const str = exampleContext.keys().find(item => item.indexOf(fileName) !== -1)
    // found old to new hash match
    if (str) {
      return createComponentHash(str.replace(/((\.)(?:[\w]+))|(^\.\/)/g, ''))
    }
  }
  return hash
}

export default getNewHash
