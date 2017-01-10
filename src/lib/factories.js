import _ from 'lodash'
import cx from 'classnames'
import React, { cloneElement, isValidElement } from 'react'

// ============================================================
// Factory Utilities
// ============================================================
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
  if (childKey) return typeof childKey === 'function' ? childKey(props) : childKey

  // 1. Stringify props to a short as possible run on string of key/values.
  // 2. Don't stringify entire functions, use the function name || 'f'.
  // 3. Generate a short hash number from the string.
  //     props  : { color: 'red', onClick: handleClick }
  //     string : 'color:"red",onClick:handleClick'
  //     hash   : 110042245
  return Object.keys(props).map(name => {
    const val = props[name]
    const type = typeof val

    const valueString = type === 'string' && val
      || type === 'number' && val
      || type === 'boolean' && (val ? 'true' : 'false')
      || type === 'function' && (val.name || 'function')
      || Array.isArray(val) && ['[', val.join(','), ']'].join('')
      || val === null && 'null'
      || type === 'object' && ['{', Object.keys(val).map(k => [k, ':', val[k]].join('')), '}'].join('')
      || val === undefined && 'undefined'

    return [name, ':', valueString].join('')
  }).join(',')
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
 * @param {boolean} [generateKey=false] Whether or not to generate a child key, useful for collections.
 * @returns {object|null}
 */
export function createShorthand(Component, mapValueToProps, val, defaultProps = {}, generateKey = false) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.')
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
  if (generateKey) props.key = getChildKey(props) // eslint-disable-line react/prop-types

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

// ============================================================
// Factories Creators
// ============================================================

/**
 * Creates a `createShorthand` function that is waiting for a value and defaultProps.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @param {boolean} [generateKey] Whether or not to generate a child key, useful for collections.
 * @return {function} A shorthand factory function waiting for `val` and `defaultProps`.
 */
export function createShorthandFactory(Component, mapValueToProps, generateKey) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.')
  }

  return (val, defaultProps) => {
    return createShorthand(Component, mapValueToProps, val, defaultProps, generateKey)
  }
}

// ============================================================
// HTML Factories
// ============================================================
export const createHTMLImage = createShorthandFactory('img', value => ({ src: value }))
export const createHTMLInput = createShorthandFactory('input', value => ({ type: value }))
export const createHTMLLabel = createShorthandFactory('label', value => ({ children: value }))
