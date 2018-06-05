import _ from 'lodash'
import cx from 'classnames'
import React, { cloneElement, isValidElement } from 'react'

interface IProps {
  [key: string]: any
}

type ShorthandFunction = (
  Component: React.ReactType,
  props: IProps,
  children: any,
) => React.ReactElement<IProps>
type ShorthandValue = string & number & IProps & React.ReactElement<IProps> & ShorthandFunction
type MapValueToProps = (value: ShorthandValue) => IProps

interface ICreateShorthandOptions {
  /** Default props object */
  defaultProps?: IProps

  /** Override props object or function (called with regular props) */
  overrideProps?: IProps | ((props: IProps) => IProps)

  /** Whether or not automatic key generation is allowed */
  autoGenerateKey?: boolean
}
const CREATE_SHORTHAND_DEFAULT_OPTIONS: ICreateShorthandOptions = {
  defaultProps: {},
  overrideProps: {},
  autoGenerateKey: true,
}

// ============================================================
// Factories
// ============================================================

/** A more robust React.createElement. It can create elements from primitive values. */
export function createShorthand(
  Component: React.ReactType,
  mapValueToProps: MapValueToProps,
  value?: ShorthandValue,
  options: ICreateShorthandOptions = CREATE_SHORTHAND_DEFAULT_OPTIONS,
): React.ReactElement<IProps> | null {
  if (typeof Component !== 'function' && typeof Component !== 'string') {
    throw new Error('createShorthand() Component must be a string or function.')
  }
  // short circuit noop values
  if (_.isNil(value) || typeof value === 'boolean') return null

  const valIsPrimitive = typeof value === 'string' || typeof value === 'number'
  const valIsPropsObject = _.isPlainObject(value)
  const valIsReactElement = isValidElement(value)
  const valIsFunction = typeof value === 'function'

  // unhandled type return null
  if (!valIsPrimitive && !valIsPropsObject && !valIsReactElement && !valIsFunction) {
    if (process.env.NODE_ENV !== 'production') {
      console.error(
        [
          'Shorthand value must be a string|number|object|ReactElement|function.',
          ' Use null|undefined|boolean for none.',
          ` Received: ${value}`,
        ].join(''),
      )
    }
    return null
  }

  // ----------------------------------------
  // Build up props
  // ----------------------------------------
  const { defaultProps = {} } = options

  // User's props
  const usersProps =
    (valIsReactElement && value.props) ||
    (valIsPropsObject && value) ||
    (valIsPrimitive && mapValueToProps(value)) ||
    {}

  // Override props
  let { overrideProps } = options
  overrideProps =
    typeof overrideProps === 'function'
      ? overrideProps({ ...defaultProps, ...usersProps })
      : overrideProps || {}

  // Merge props
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
  const { autoGenerateKey = true } = options

  // Use key or generate key
  if (autoGenerateKey && _.isNil(props.key) && valIsPrimitive) {
    // use string/number shorthand values as the key
    props.key = value
  }

  // ----------------------------------------
  // Create Element
  // ----------------------------------------

  // Clone ReactElements
  if (valIsReactElement) return cloneElement(value, props)

  // Create ReactElements from built up props
  if (valIsPrimitive || valIsPropsObject) return <Component {...props} />

  // Call functions with args similar to createElement()
  if (valIsFunction) return value(Component, props, props.children)
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
export const createHTMLIframe = createShorthandFactory('iframe', src => ({ src }))
export const createHTMLImage = createShorthandFactory('img', val => ({ src: val }))
export const createHTMLInput = createShorthandFactory('input', val => ({ type: val }))
export const createHTMLLabel = createShorthandFactory('label', val => ({ children: val }))
export const createHTMLParagraph = createShorthandFactory('p', val => ({ children: val }))
