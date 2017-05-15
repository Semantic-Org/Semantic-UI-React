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
 * @param {object|function} [options.overrideProps={}] Override props object or function (called with regular props)
 * @returns {object|null}
 */
export function createShorthand(Component, mapValueToProps, val, options = {}) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.')
  }
  // short circuit noop values
  if (_.isNil(val) || _.isBoolean(val)) return null

  const valIsString = _.isString(val)
  const valIsNumber = _.isNumber(val)

  const isReactElement = isValidElement(val)
  const isPropsObject = _.isPlainObject(val)
  const isPrimitiveValue = valIsString || valIsNumber || _.isArray(val)

  // unhandled type return null
  /* eslint-disable no-console */
  if (!isReactElement && !isPropsObject && !isPrimitiveValue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error([
        'Shorthand value must be a string|number|array|object|ReactElement.',
        ' Use null|undefined|boolean for none',
        ` Received ${typeof val}.`,
      ].join(''))
    }
    return null
  }
  /* eslint-enable no-console */

  // ----------------------------------------
  // Build up props
  // ----------------------------------------
  const { defaultProps = {} } = options

  // User's props
  const usersProps = isReactElement && val.props || isPropsObject && val || isPrimitiveValue && mapValueToProps(val)

  // Override props
  let { overrideProps = {} } = options
  overrideProps = _.isFunction(overrideProps) ? overrideProps({ ...defaultProps, ...usersProps }) : overrideProps

  // Merge props
  /* eslint-disable react/prop-types */
  const props = { ...defaultProps, ...usersProps, ...overrideProps }

  // Merge className
  if (defaultProps.className || overrideProps.className || usersProps.className) {
    const mergedClassesNames = cx(defaultProps.className, overrideProps.className, usersProps.className)
    props.className = _.uniq(mergedClassesNames.split(' ')).join(' ')
  }

  // Merge style
  if (defaultProps.style || overrideProps.style || usersProps.style) {
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
    } else if (valIsString || valIsNumber) {
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
}

// ============================================================
// Factory Creators
// ============================================================

/**
 * Creates a `createShorthand` function that is waiting for a value and options.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @returns {function} A shorthand factory function waiting for `val` and `defaultProps`.
 */
export function createShorthandFactory(Component, mapValueToProps) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthandFactory() Component must be a string or function.')
  }

  return (val, options) => createShorthand(Component, mapValueToProps, val, options)
}

// ============================================================
// HTML Factories
// ============================================================
export const createHTMLDivision = createShorthandFactory('div', val => ({ children: val }))
export const createHTMLImage = createShorthandFactory('img', val => ({ src: val }))
export const createHTMLInput = createShorthandFactory('input', val => ({ type: val }))
export const createHTMLLabel = createShorthandFactory('label', val => ({ children: val }))
export const createHTMLParagraph = createShorthandFactory('p', val => ({ children: val }))
