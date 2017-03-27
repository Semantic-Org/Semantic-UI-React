import _ from 'lodash'
import cx from 'classnames'
import React, { cloneElement, isValidElement } from 'react'

// ============================================================
// Factories
// ============================================================

/**
 * A more robust React.createElement. It can create elements from primitive values.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @param {string|object|function} val The value to create a ReactElement from
 * @param {Object} [options={}]
 * @param {object} [options.defaultProps={}] Default props object
 * @param {object} [options.overrideProps={}] Override props object
 * @param {boolean} [options.generateKey=false] Whether or not to generate a child key, useful for collections
 * @returns {object|null}
 */
export function createShorthand(Component, mapValueToProps, val, options) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.')
  }
  // short circuit for disabling shorthand
  if (val === null) return null

  const {
    generateKey = false,
    defaultProps = {},
    overrideProps = {},
  } = options

  const valIsString = _.isString(val)
  const valIsNumber = _.isNumber(val)

  const isReactElement = isValidElement(val)
  const isPropsObject = _.isPlainObject(val)
  const isPrimitiveValue = valIsString || valIsNumber || _.isArray(val)

  // ----------------------------------------
  // Build up props
  // ----------------------------------------

  // User's props
  const usersProps = isReactElement && val.props || isPropsObject && val || isPrimitiveValue && mapValueToProps(val)

  // Merge props
  /* eslint-disable react/prop-types */
  const props = { ...defaultProps, ...usersProps, ...overrideProps }

  // Merge className
  const mergedClassesNames = cx(defaultProps.className, overrideProps.className, usersProps.className)
  props.className = _.uniq(mergedClassesNames.split(' ')).join(' ')

  // Merge style
  if (usersProps.style && (defaultProps.style || overrideProps.style)) {
    props.style = { ...defaultProps.style, ...usersProps.style, ...overrideProps.style }
  }

  // ----------------------------------------
  // Get key
  // ----------------------------------------

  // Use key, childKey, or generate key
  if (!props.key) {
    const { childKey } = props

    if (childKey) {
      // apply and consume the childKey
      props.key = typeof childKey === 'function' ? childKey(props) : childKey
      delete props.childKey
    } else if (generateKey && (valIsString || valIsNumber)) {
      // use string/number shorthand values as the key
      props.key = val
    }
  }
  /* eslint-enable react/prop-types */

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
// Factory Creators
// ============================================================

/**
 * Creates a `createShorthand` function that is waiting for a value and defaultProps.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @param {boolean=false} [generateKey] Whether or not to generate a child key, useful for collections.
 * @returns {function} A shorthand factory function waiting for `val` and `defaultProps`.
 */
export function createShorthandFactory(Component, mapValueToProps, generateKey) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.')
  }

  return (val, options) => createShorthand(Component, mapValueToProps, val, { ...options, generateKey })
}

// ============================================================
// HTML Factories
// ============================================================
export const createHTMLImage = createShorthandFactory('img', value => ({ src: value }))
export const createHTMLInput = createShorthandFactory('input', value => ({ type: value }))
export const createHTMLLabel = createShorthandFactory('label', value => ({ children: value }))
