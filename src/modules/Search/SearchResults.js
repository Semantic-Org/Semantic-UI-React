import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function SearchResults(props) {
  const { children, className } = props
  const classes = cx('results transition', className)
  const rest = getUnhandledProps(SearchResults, props)
  const ElementType = getElementType(SearchResults, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

SearchResults._meta = {
  name: 'SearchResults',
  parent: 'Search',
  type: META.TYPES.MODULE,
}

SearchResults.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,
}

export default SearchResults
