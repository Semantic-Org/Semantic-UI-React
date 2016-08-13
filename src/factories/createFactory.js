import _ from 'lodash'
import cx from 'classnames'
import React, { isValidElement } from 'react'

/**
 * The default CreateFactory mergeExtraProps function.  Merges props and classNames.
 * @param props
 * @param extraProps
 * @returns {{className: *}}
 */
const mergePropsAndClassName = (props, extraProps) => {
  let className
  if (_.has(props, 'className') || _.has(extraProps.className)) {
    className = cx(props.className, extraProps.className) // eslint-disable-line react/prop-types
  }
  return { ...props, ...extraProps, className }
}

/**
 * Return a function that produces ReactElements.  Similar to React.createFactory with some extras.
 * If the returned factory is passed a ReactElement it will be cloned.
 * If it passed undefined it will do nothing.
 * @param {function|string} Component A ReactClass or string
 * @param {function} mapValueToProps A function that maps a primitive value to the Component props
 * @param {function} [mergeExtraProps=mergePropsAndClassName]
 * @returns {function}
 */
const createFactory = (Component, mapValueToProps, mergeExtraProps = mergePropsAndClassName) => {
  return function Factory(val, extraProps = {}) {
    // Clone ReactElements
    if (isValidElement(val)) {
      return React.cloneElement(val, mergeExtraProps(val.props, extraProps))
    }

    // Create ReactElements from props objects
    if (_.isPlainObject(val)) {
      return <Component {...mergeExtraProps(val, extraProps)} />
    }

    // Map values to props and create an ReactElement
    if (val !== undefined) {
      return <Component {...mergeExtraProps(mapValueToProps(val), extraProps)} />
    }
  }
}

export default createFactory
