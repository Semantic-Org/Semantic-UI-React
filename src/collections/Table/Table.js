import _ from 'lodash'
import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
  useWidthProp,
} from '../../lib'
import TableBody from './TableBody'
import TableCell from './TableCell'
import TableFooter from './TableFooter'
import TableHeader from './TableHeader'
import TableHeaderCell from './TableHeaderCell'
import TableRow from './TableRow'

/**
 * A table displays a collections of data grouped into rows
 */
function Table(props) {
  const {
    basic,
    celled,
    children,
    className,
    collapsing,
    color,
    columns,
    compact,
    definition,
    fixed,
    inverted,
    padded,
    selectable,
    singleLine,
    size,
    stackable,
    striped,
    structured,
    unstackable,
  } = props
  const classes = cx(
    'ui',
    color,
    size,
    useKeyOrValueAndKey(basic, 'basic'),
    useKeyOnly(celled, 'celled'),
    useKeyOnly(collapsing, 'collapsing'),
    useKeyOrValueAndKey(compact, 'compact'),
    useKeyOnly(definition, 'definition'),
    useKeyOnly(fixed, 'fixed'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOrValueAndKey(padded, 'padded'),
    useKeyOnly(selectable, 'selectable'),
    useKeyOnly(singleLine, 'single line'),
    useKeyOnly(stackable, 'stackable'),
    useKeyOnly(striped, 'striped'),
    useKeyOnly(structured, 'structured'),
    useKeyOnly(unstackable, 'unstackable'),
    useWidthProp(columns, 'column'),
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
    color: SUI.COLORS,
    columns: SUI.WIDTHS,
    compact: ['very'],
    padded: ['very'],
    size: _.without(SUI.SIZES, 'mini', 'tiny', 'medium', 'big', 'huge', 'massive'),
  },
}

Table.defaultProps = {
  as: 'table',
}

Table.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** A table can reduce its complexity to increase readability. */
  basic: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Table._meta.props.basic),
  ]),

  /** A table may be divided each row into separate cells. */
  celled: PropTypes.bool,

  /** Primary content of the Table. */
  children: PropTypes.node,

  /** Classes that will be added to the Table className. */
  className: PropTypes.string,

  /** A table can be collapsing, taking up only as much space as its rows. */
  collapsing: PropTypes.bool,

  /** A table can be given a color to distinguish it from other tables. */
  color: PropTypes.oneOf(Table._meta.props.color),

  /** A table can specify its column count to divide its content evenly. */
  columns: PropTypes.oneOf(Table._meta.props.columns),

  /** A table may sometimes need to be more compact to make more rows visible at a time. */
  compact: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Table._meta.props.compact),
  ]),

  /** A table may be formatted to emphasize a first column that defines a rows content. */
  definition: PropTypes.bool,

  /**
   * A table can use fixed a special faster form of table rendering that does not resize table cells based on content
   * */
  fixed: PropTypes.bool,

  /** A table's colors can be inverted. */
  inverted: PropTypes.bool,

  /** A table may sometimes need to be more padded for legibility. */
  padded: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(Table._meta.props.padded),
  ]),

  /** A table can have its rows appear selectable. */
  selectable: PropTypes.bool,

  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine: PropTypes.bool,

  /** A table can also be small or large. */
  size: PropTypes.oneOf(Table._meta.props.size),

  /** A table can specify how it stacks table content responsively. */
  stackable: PropTypes.bool,

  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
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
