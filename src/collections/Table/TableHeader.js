import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

function TableHeader(props) {
  const { children, className, fullWidth } = props
  const classes = cx(
    useKeyOnly(fullWidth, 'full-width'),
    className
  )

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
  as: customPropTypes.as,

  /** Primary content of the TableHeader. */
  children: PropTypes.node,

  /** Classes that will be added to the TableHeader className. */
  className: PropTypes.string,

  /** A definition table can have a full width header or footer, filling in the gap left by the first column. */
  fullWidth: PropTypes.bool,
}

export default TableHeader
