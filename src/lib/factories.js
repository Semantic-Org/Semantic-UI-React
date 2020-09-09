import cx from 'clsx'
import _ from 'lodash'
import * as React from 'react'

const DEPRECATED_CALLS = {}

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
 * @param {boolean} [options.autoGenerateKey=true] Whether or not automatic key generation is allowed
 * @returns {object|null}
 */
export function createShorthand(Component, mapValueToProps, val, options = {}) {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthand() Component must be a string or function.')
  }

  // short circuit noop values
  if (_.isNil(val) || _.isBoolean(val)) {
    return null
  }

  const valIsString = _.isString(val)
  const valIsNumber = _.isNumber(val)
  const valIsFunction = _.isFunction(val)
  const valIsReactElement = React.isValidElement(val)
  const valIsPropsObject = _.isPlainObject(val)
  const valIsPrimitiveValue = valIsString || valIsNumber || _.isArray(val)

  // unhandled type return null
  /* eslint-disable no-console */
  if (!valIsFunction && !valIsReactElement && !valIsPropsObject && !valIsPrimitiveValue) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        [
          'Shorthand value must be a string|number|array|object|ReactElement|function.',
          ' Use null|undefined|boolean for none',
          ` Received ${typeof val}.`,
        ].join(''),
      )
    }
    return null
  }
  /* eslint-enable no-console */

  // ----------------------------------------
  // Build up props
  // ----------------------------------------
  const { defaultProps = {} } = options

  // User's props
  const usersProps =
    (valIsReactElement && val.props) ||
    (valIsPropsObject && val) ||
    (valIsPrimitiveValue && mapValueToProps(val))

  // Override props
  let { overrideProps = {} } = options
  overrideProps = _.isFunction(overrideProps)
    ? overrideProps({ ...defaultProps, ...usersProps })
    : overrideProps

  // Merge props
  /* eslint-disable react/prop-types */
  const props = { ...defaultProps, ...usersProps, ...overrideProps }

  // Merge className
  if (defaultProps.className || overrideProps.className || usersProps.className) {
    const mergedClassesNames = cx(
      defaultProps.className,
      overrideProps.className,
      usersProps.className,
    )
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
  if (_.isNil(props.key)) {
    const { childKey } = props
    const { autoGenerateKey = true } = options

    if (!_.isNil(childKey)) {
      // apply and consume the childKey
      props.key = typeof childKey === 'function' ? childKey(props) : childKey
      delete props.childKey
    } else if (autoGenerateKey && (valIsString || valIsNumber)) {
      // use string/number shorthand values as the key
      props.key = val
    }
  }

  // ----------------------------------------
  // Create Element
  // ----------------------------------------

  // Clone ReactElements
  if (valIsReactElement) {
    return React.cloneElement(val, props)
  }

  if (typeof props.children === 'function') {
    return props.children(Component, { ...props, children: undefined })
  }

  // Create ReactElements from built up props
  if (valIsPrimitiveValue || valIsPropsObject) {
    return React.createElement(Component, props)
  }

  // Call functions with args similar to createElement()
  // TODO: V3 remove the implementation
  if (valIsFunction) {
    if (process.env.NODE_ENV !== 'production') {
      if (!DEPRECATED_CALLS[Component]) {
        DEPRECATED_CALLS[Component] = true

        // eslint-disable-next-line no-console
        console.warn(
          `Warning: There is a deprecated shorthand function usage for "${Component}". It is deprecated and will be removed in v3 release. Please follow our upgrade guide: https://github.com/Semantic-Org/Semantic-UI-React/pull/4029`,
        )
      }
    }

    return val(Component, props, props.children)
  }
  /* eslint-enable react/prop-types */
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
export const createHTMLDivision = /* #__PURE__ */ createShorthandFactory('div', (val) => ({
  children: val,
}))
export const createHTMLIframe = /* #__PURE__ */ createShorthandFactory('iframe', (src) => ({ src }))
export const createHTMLImage = /* #__PURE__ */ createShorthandFactory('img', (val) => ({
  src: val,
}))
export const createHTMLInput = /* #__PURE__ */ createShorthandFactory('input', (val) => ({
  type: val,
}))
export const createHTMLLabel = /* #__PURE__ */ createShorthandFactory('label', (val) => ({
  children: val,
}))
export const createHTMLParagraph = /* #__PURE__ */ createShorthandFactory('p', (val) => ({
  children: val,
}))
