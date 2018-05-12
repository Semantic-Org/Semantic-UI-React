import _ from 'lodash/fp'

import * as semanticUIReact from 'src'
import { META } from 'src/lib'

export * from './constants'
export getComponentGroup from './getComponentGroup'
export getSeeItems from './getSeeItems'
export scrollToAnchor from './scrollToAnchor'

/**
 * Get the Webpack Context for all doc site examples.
 */
const getExampleContext = require.context('docs/app/Examples/', true, /(\w+Example\w*|index)\.js$/)
export const exampleContext = getExampleContext

export const parentComponents = _.flow(_.filter(META.isParent), _.sortBy('_meta.name'))(
  semanticUIReact,
)

/**
 * Shorten hash path
 * Typical Hash structure ${pathname}       | ${section} | ${exampleName}
 * shorten to new structure ${section} | ${exampleName without "component-example"}
 * @param {string} str
 */
export const shortenComponentHash = (str) => {
  const hashParts = str.split('/')
  if (hashParts.length) {
    // get path name
    const componentName = hashParts[1]
    // get shortenHash
    const shortenHash = hashParts.splice(2)
    // compress example name
    shortenHash[shortenHash.length - 1] = shortenHash[shortenHash.length - 1].replace(
      new RegExp(`${componentName}Example`, 'i'),
      '',
    )
    return _.kebabCase(shortenHash.join(' '))
  }
  return str
}

/**
 * createComponentHash
 * @param {string} str
 */
export const createComponentHash = str => shortenComponentHash(str)

/**
 * get new hash using old
 * @param {string} hash
 */
export const getNewHash = (hash) => {
  const isOldHash = true
  if (isOldHash) {
    const fileName = _.startCase(hash).replace(/\s/g, '')
    const str = getExampleContext.keys().find(item => item.indexOf(fileName) !== -1)
    // found old to new hash match
    if (str) {
      return shortenComponentHash(str.replace(/((\.)(?:[\w]+))|(^\.\/)/g, ''))
    }
  }
  return hash
}

/**
 * Check whether given hash is old or new, redirect to new hash in case of old one
 * @param {string} hash
 */
export const isOldHash = (hash) => {
  const expectedTypes = ['types', 'states', 'variations']
  const hashParts = hash.split('-') || []
  return !(expectedTypes.findIndex(item => item === hashParts[0]) !== -1)
}

/**
 * Retrieve hash string from location path
 * @param {string} hash
 */
export const getHashString = hash => _.last((hash || '').split('#'))
