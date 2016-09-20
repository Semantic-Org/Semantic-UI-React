import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'
import TableBody from './TableBody'
import TableColumn from './TableColumn'
import TableFoot from './TableFoot'
import TableHead from './TableHead'

function Table(props) {
  const { children, className } = props
  const classes = cx(className)
  const ElementType = getElementType(Table, props)
  const rest = getUnhandledProps(Table, props)

  return <ElementType {...rest} className={classes}>{children}</ElementType>
}

Table._meta = {
  name: 'Table',
  type: META.TYPES.COLLECTION,
}

Table.defaultProps = {
  as: 'table',
}

Table.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),

  /** Primary content of the Table. */
  children: PropTypes.node,

  /** Classes that will be added to the Table className. */
  className: PropTypes.string,
}

Table.Body = TableBody
Table.Column = TableColumn
Table.Foot = TableFoot
Table.Head = TableHead

export default Table
