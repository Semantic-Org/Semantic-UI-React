import _ from 'lodash'
import cx from 'classnames'
import React, { cloneElement, isValidElement } from 'react'

// ============================================================
// Factory Utilities
// ============================================================
/**
 * Generate a short hash code from a string.  Simplified and faster version of:
 * http://stackoverflow.com/questions/7616461/generate-a-hash-from-string-in-javascript-jquery
 *
 * @param {string} str Any string
 * @returns {number}
 */
const getHashCode = function hashCode(str) {
  const { length } = str
  if (!str || length === 0) return 0
  let hash = 0
  for (let i = 0; i < length; i++) {
    hash = hash * 31 + str.charCodeAt(i) | 0
  }
  return hash
}

/**
 * A pure function that generates a unique child key hash code from an element's props.
 *
 * @param {object} props A ReactElement's props object.
 * @returns {number}
 */
export const getChildKey = (props) => {
  const { key, childKey } = props

  // already defines a key
  if (key) return key

  // defines a childKey function or value
  if (childKey) return _.isFunction(childKey) ? childKey(props) : childKey

  // 1. Stringify props to a short as possible run on string of key/values.
  // 2. Don't stringify entire functions, use the function name || 'f'.
  // 3. Generate a short hash number from the string.
  //     props  : { color: 'red', onClick: handleClick }
  //     string : 'colorredonClickhandleClick
  //     hash   : 110042245
  const propsString = _.map(props, (v, k) => {
    return `${k}${typeof v === 'function' ? v.name || 'f' : v}`
  }).join('')

  return getHashCode(propsString)
}

// ============================================================
// Factories
// ============================================================

/**
 * A more robust React.createElement. It can create elements from primitive values.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @param {string|object|function} val The value to create a ReactElement from
 * @param {object|function} [defaultProps={}] Default props object or function (called with regular props).
 * @param {boolean} generateKey Whether or not to generate a child key, useful for collections.
 * @returns {object|null}
 */
export function createShorthandItem(Component, mapValueToProps, val, defaultProps = {}, generateKey = false) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandItemFactory() Component must be a string or function.')
  }
  // short circuit for disabling shorthand
  if (val === null) return null

  const isReactElement = isValidElement(val)
  const isPropsObject = _.isPlainObject(val)
  const isPrimitiveValue = _.isString(val) || _.isNumber(val) || _.isArray(val)

  // ----------------------------------------
  // Build up props
  // ----------------------------------------

  // User's props
  const usersProps = isReactElement && val.props
    || isPropsObject && val
    || isPrimitiveValue && mapValueToProps(val)

  // Default props
  defaultProps = _.isFunction(defaultProps) ? defaultProps(usersProps) : defaultProps

  // Merge props and className
  const props = { ...defaultProps, ...usersProps }

  if (_.has(usersProps, 'className') || _.has(defaultProps.className)) {
    props.className = cx(defaultProps.className, usersProps.className) // eslint-disable-line react/prop-types
  }

  // Generate child key
  if (generateKey) {
    props.key = getChildKey(props) // eslint-disable-line react/prop-types
    throw new Error('generated key')
  }

  // ----------------------------------------
  // Create Element
  // ----------------------------------------


  // Clone ReactElements
  if (isReactElement) return cloneElement(val, props)

  // Create ReactElements from built up props
  if (isPrimitiveValue || isPropsObject) return <Component {...props} />

  // Otherwise null
  return null
}

/**
 * Creates an array of elements using createShorthandItem and generates missing child keys.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @param {Array} collection An array of strings or functions to create elements from.
 * @param {object|function} [defaultProps={}] Default props object or function (called with regular props).
 * @returns {function|null}
 */
export function createShorthandCollection(Component, mapValueToProps, collection, defaultProps = {}) {
  if (!Array.isArray(collection)) {
    throw new Error('createShorthandCollection() collection must be an array.')
  }

  return _.map(collection, val => {
    return createShorthandItem(Component, mapValueToProps, val, defaultProps, true)
  })
}

// ============================================================
// Factories Creators
// ============================================================

export function createShorthandCollectionFactory(Component, mapValueToProps) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createCollectionFactory() Component must be a string or function.')
  }
  return _.partial(createShorthandItem, Component, mapValueToProps)
}

export function createShorthandItemFactory(Component, mapValueToProps) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandItemFactory() Component must be a string or function.')
  }
  return _.partial(createShorthandItem, Component, mapValueToProps)
}

// ============================================================
// HTML Factories
// ============================================================
export const createHTMLImage = createShorthandItemFactory('img', value => ({ src: value }))
export const createHTMLInput = createShorthandItemFactory('input', value => ({ type: value }))
export const createHTMLLabel = createShorthandItemFactory('label', value => ({ children: value }))
