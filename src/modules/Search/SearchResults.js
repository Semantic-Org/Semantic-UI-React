import React, { PropTypes } from 'react'
import cx from 'classnames'

import { getElementType, getUnhandledProps, META } from '../../lib'

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
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Should be <Search.Result /> components. */
  children: PropTypes.node,

  /** Classes to add to the className. */
  className: PropTypes.string,
}

export default SearchResults
