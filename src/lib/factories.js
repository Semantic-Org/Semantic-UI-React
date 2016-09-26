import _ from 'lodash'
import cx from 'classnames'
import React, { isValidElement } from 'react'

/**
 * Merges props and classNames.
 *
 * @param {object} defaultProps A props object
 * @param {object} props A props object
 * @returns {object} A new props object
 */
const mergePropsAndClassName = (defaultProps, props) => {
  const { childKey, ...newProps } = { ...defaultProps, ...props }

  if (_.has(props, 'className') || _.has(defaultProps.className)) {
    newProps.className = cx(defaultProps.className, props.className) // eslint-disable-line react/prop-types
  }

  if (!newProps.key) {
    newProps.key = _.isFunction(childKey) ? childKey(newProps) : childKey
  }

  return newProps
}

/**
 * A more robust React.createElement.
 * It can create elements from primitive values.
 *
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @param {string|object|function} val The value to create a ReactElement from
 * @param {object} defaultProps Default props to add to the final ReactElement
 * @returns {function|null}
 */
export function createShorthand(Component, mapValueToProps, val, defaultProps = {}) {
  // Clone ReactElements
  if (isValidElement(val)) {
    return React.cloneElement(val, mergePropsAndClassName(defaultProps, val.props))
  }

  // Create ReactElements from props objects
  if (_.isPlainObject(val)) {
    return <Component {...mergePropsAndClassName(defaultProps, val)} />
  }

  // Map values to props and create a ReactElement
  if (_.isString(val) || _.isNumber(val)) {
    return <Component {...mergePropsAndClassName(mapValueToProps(val), defaultProps)} />
  }

  // Otherwise null
  return null
}

export function createShorthandFactory(Component, mapValueToProps) {
  return _.partial(createShorthand, Component, mapValueToProps)
}

// ----------------------------------------
// HTML Factories
// ----------------------------------------
export const createHTMLImage = createShorthandFactory('img', value => ({ src: value }))
