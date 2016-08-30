import cx from 'classnames'
import _ from 'lodash'
import React, { PropTypes } from 'react'

import { META, getElementType, getUnhandledProps } from '../lib'

// memoize component part functions
const cache = {}
const getCacheKey = (partName, defaultProps) => [
  partName,
  ..._.map(defaultProps, (val, key) => `${key}:${val}`),
].join('_')

/**
 * Returns a memoized component part factory. The factory accepts defaultProps.
 * It is useful for generating simple sub components (i.e. FeedDate) with consistent functionality:
 *  - spreads unhandled props
 *  - merges className
 *  - renders children
 *  - uses dynamic element type
 *  - provides elementType prop
 *  - provides childKey prop
 * @param {string} partName Used as to create the displayName and className.
 * @returns {function}
 * @example
 * // make a part factory
 * const createTitlePart = createPartFactory('title')
 *
 * // Create a Title in some component, passing optional defaultProps...
 * const Title = createTitlePart({
 *   className: 'foo',
 *   childKey: 'unique',
 *   elementType: 'a',
 *   href='http://google.com'
 * })
 *
 * // Default use
 * <Title />
 *
 * // renders
 * <a href='http://google.com className='unique' />
 *
 * // User's can use it like so
 * <Title
 *   className='is merged'
 *   childKey='is overridden'
 *   elementType='h1'
 *   data-custom='is spread'
 * >
 *   A customized title
 * </Title>
 *
 * // renders
 * <h1 className='title is merged' data-custom='is merged'>
 *   A customized title
 * </h1>
 */
const createPartFactory = (partName) => (defaultProps = {}) => {
  // memoize component parts
  const cacheKey = getCacheKey(partName, defaultProps)
  const cached = cache[cacheKey]
  if (cached) return cached

  function ComponentPart(props) {
    const { childKey, className } = props
    const classes = cx(partName, className)
    const rest = getUnhandledProps(ComponentPart, props)
    const ElementType = getElementType(ComponentPart, props)

    return (
      <ElementType className={classes} {...rest} key={childKey}>
        {props.children}
      </ElementType>
    )
  }

  ComponentPart.defaultProps = defaultProps
  ComponentPart.displayName = `${_.capitalize(partName)}Part`

  ComponentPart._meta = {
    type: META.TYPES.PART,
    name: partName,
  }

  ComponentPart.propTypes = {
    /** An element type to render as (string or function). */
    as: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.func,
    ]),

    /** Primary content. */
    children: PropTypes.node,

    /** Classes to add to className. */
    className: PropTypes.string,

    /** React key to use if this component is used in an an array */
    childKey: PropTypes.string,
  }

  cache[cacheKey] = ComponentPart
  return ComponentPart
}

export default createPartFactory
