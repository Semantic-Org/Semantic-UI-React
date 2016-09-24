import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
  useKeyOrValueAndKey,
} from '../../lib'
import TableBody from './TableBody'
import TableCell from './TableCell'
import TableHeaderCell from './TableHeaderCell'
import TableFooter from './TableFooter'
import TableHeader from './TableHeader'
import TableRow from './TableRow'

function Table(props) {
  const {
    basic,
    celled,
    collapsing,
    compact,
    children,
    className,
    definition,
    fixed,
    inverted,
    padded,
    selectable,
    singleLine,
    stackable,
    striped,
    structured,
    unstackable,
  } = props
  const classes = cx(
    'ui',
    useKeyOrValueAndKey(basic, 'basic'),
    useKeyOnly(celled, 'celled'),
    useKeyOnly(collapsing, 'collapsing'),
    useKeyOnly(compact, 'compact'),
    useKeyOnly(definition, 'definition'),
    useKeyOnly(fixed, 'fixed'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(padded, 'padded'),
    useKeyOnly(selectable, 'selectable'),
    useKeyOnly(singleLine, 'single line'),
    useKeyOnly(stackable, 'stackable'),
    useKeyOnly(striped, 'striped'),
    useKeyOnly(structured, 'structured'),
    useKeyOnly(unstackable, 'unstackable'),
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
  props: {
    basic: ['very'],
  },
}

Table.defaultProps = {
  as: 'table',
}

Table.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  basic: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Table._meta.props.basic),
  ]),

  celled: PropTypes.bool,

  collapsing: PropTypes.bool,

  /** Primary content of the Table. */
  children: PropTypes.node,

  /** Classes that will be added to the Table className. */
  className: PropTypes.string,

  compact: PropTypes.bool,

  /** A table may be formatted to emphasize a first column that defines a rows content. */
  definition: PropTypes.bool,

  /**
   * A table can use fixed a special faster form of table rendering that does not resize table cells based on content
   * */
  fixed: PropTypes.bool,

  inverted: PropTypes.bool,

  /** A table may sometimes need to be more padded for legibility. */
  padded: PropTypes.bool,

  /** A table can have its rows appear selectable. */
  selectable: PropTypes.bool,

  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine: PropTypes.bool,

  /** A table can specify how it stacks table content responsively. */
  stackable: PropTypes.bool,

  striped: PropTypes.bool,

  /** A table can be formatted to display complex structured data. */
  structured: PropTypes.bool,

  /** A table can specify how it stacks table content responsively. */
  unstackable: PropTypes.bool,
}

Table.Body = TableBody
Table.Cell = TableCell
Table.Footer = TableFooter
Table.Header = TableHeader
Table.HeaderCell = TableHeaderCell
Table.Row = TableRow

export default Table
