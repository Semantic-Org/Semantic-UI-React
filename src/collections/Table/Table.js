import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'
import TableBody from './TableBody'
import TableCell from './TableCell'
import TableFooter from './TableFooter'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

/**
 * A table displays a collections of data grouped into rows
 */
function Table(props) {
  const { celled, children, className, padded } = props
  const classes = cx(
    'ui',
    useKeyOnly(celled, 'celled'),
    useKeyOnly(padded, 'padded'),
    className,
    'table'
  )

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

  celled: PropTypes.bool,

  /** Primary content of the Table. */
  children: PropTypes.node,

  /** Classes that will be added to the Table className. */
  className: PropTypes.string,

  /** A table may sometimes need to be more padded for legibility. */
  padded: PropTypes.bool,
}

Table.Body = TableBody
Table.Cell = TableCell
Table.Footer = TableFooter
Table.Header = TableHeader
Table.Row = TableRow

export default Table
