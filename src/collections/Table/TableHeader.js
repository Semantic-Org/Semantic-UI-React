import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function TableHeader(props) {
  const { children, className } = props
  const classes = cx(className)
  const ElementType = getElementType(TableHeader, props)
  const rest = getUnhandledProps(TableHeader, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

TableHeader._meta = {
  name: 'TableHeader',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
}

TableHeader.defaultProps = {
  as: 'thead',
}

TableHeader.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the TableHeader. */
  children: PropTypes.node,

  /** Classes that will be added to the TableHeader className. */
  className: PropTypes.string,
}

export default TableHeader
