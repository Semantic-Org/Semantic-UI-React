import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

function TableRow(props) {
  const { children, className } = props
  const classes = cx(className)
  const ElementType = getElementType(TableRow, props)
  const rest = getUnhandledProps(TableRow, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

TableRow._meta = {
  name: 'TableRow',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
}

TableRow.defaultProps = {
  as: 'tr',
}

TableRow.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the TableRow. */
  children: PropTypes.node,

  /** Classes that will be added to the TableRow className. */
  className: PropTypes.string,
}

export default TableRow
