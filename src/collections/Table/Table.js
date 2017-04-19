import _ from 'lodash'
import cx from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  SUI,
  useKeyOnly,
  useKeyOrValueAndKey,
  useTextAlignProp,
  useVerticalAlignProp,
  useWidthProp,
} from '../../lib'
import TableBody from './TableBody'
import TableCell from './TableCell'
import TableFooter from './TableFooter'
import TableHeader from './TableHeader'
import TableHeaderCell from './TableHeaderCell'
import TableRow from './TableRow'

/**
 * A table displays a collections of data grouped into rows.
 */
function Table(props) {
  const {
    attached,
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
    footerRow,
    headerRow,
    inverted,
    padded,
    renderBodyRow,
    selectable,
    singleLine,
    size,
    sortable,
    stackable,
    striped,
    structured,
    tableData,
    textAlign,
    unstackable,
    verticalAlign,
  } = props

  const classes = cx(
    'ui',
    color,
    size,
    useKeyOnly(celled, 'celled'),
    useKeyOnly(collapsing, 'collapsing'),
    useKeyOnly(definition, 'definition'),
    useKeyOnly(fixed, 'fixed'),
    useKeyOnly(inverted, 'inverted'),
    useKeyOnly(selectable, 'selectable'),
    useKeyOnly(singleLine, 'single line'),
    useKeyOnly(sortable, 'sortable'),
    useKeyOnly(stackable, 'stackable'),
    useKeyOnly(striped, 'striped'),
    useKeyOnly(structured, 'structured'),
    useKeyOnly(unstackable, 'unstackable'),
    useKeyOrValueAndKey(attached, 'attached'),
    useKeyOrValueAndKey(basic, 'basic'),
    useKeyOrValueAndKey(compact, 'compact'),
    useKeyOrValueAndKey(padded, 'padded'),
    useTextAlignProp(textAlign),
    useVerticalAlignProp(verticalAlign),
    useWidthProp(columns, 'column'),
    'table',
    className,
  )
  const rest = getUnhandledProps(Table, props)
  const ElementType = getElementType(Table, props)

  if (!_.isNil(children)) {
    return <ElementType {...rest} className={classes}>{children}</ElementType>
  }

  return (
    <ElementType {...rest} className={classes}>
      {headerRow && <TableHeader>{TableRow.create(headerRow, { defaultProps: { cellAs: 'th' } })}</TableHeader>}
      <TableBody>
        {renderBodyRow && _.map(tableData, (data, index) => TableRow.create(renderBodyRow(data, index)))}
      </TableBody>
      {footerRow && <TableFooter>{TableRow.create(footerRow)}</TableFooter>}
    </ElementType>
  )
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
  as: customPropTypes.as,

  /** Attach table to other content */
  attached: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['top', 'bottom']),
  ]),

  /** A table can reduce its complexity to increase readability. */
  basic: PropTypes.oneOfType([
    PropTypes.oneOf(['very']),
    PropTypes.bool,
  ]),

  /** A table may be divided each row into separate cells. */
  celled: PropTypes.bool,

  /** Primary content. */
  children: PropTypes.node,

  /** Additional classes. */
  className: PropTypes.string,

  /** A table can be collapsing, taking up only as much space as its rows. */
  collapsing: PropTypes.bool,

  /** A table can be given a color to distinguish it from other tables. */
  color: PropTypes.oneOf(SUI.COLORS),

  /** A table can specify its column count to divide its content evenly. */
  columns: PropTypes.oneOf(SUI.WIDTHS),

  /** A table may sometimes need to be more compact to make more rows visible at a time. */
  compact: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['very']),
  ]),

  /** A table may be formatted to emphasize a first column that defines a rows content. */
  definition: PropTypes.bool,

  /**
   * A table can use fixed a special faster form of table rendering that does not resize table cells based on content
   */
  fixed: PropTypes.bool,

  /** Shorthand for a TableRow to be placed within Table.Footer. */
  footerRow: customPropTypes.itemShorthand,

  /** Shorthand for a TableRow to be placed within Table.Header. */
  headerRow: customPropTypes.itemShorthand,

  /** A table's colors can be inverted. */
  inverted: PropTypes.bool,

  /** A table may sometimes need to be more padded for legibility. */
  padded: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.oneOf(['very']),
  ]),

  /**
   * Mapped over `tableData` and should return shorthand for each Table.Row to be placed within Table.Body.
   *
   * @param {*} data - An element in the `tableData` array.
   * @param {number} index - The index of the current element in `tableData`.
   * @returns {*} Shorthand for a Table.Row.
   */
  renderBodyRow: customPropTypes.every([
    customPropTypes.disallow(['children']),
    customPropTypes.demand(['tableData']),
    PropTypes.func,
  ]),

  /** A table can have its rows appear selectable. */
  selectable: PropTypes.bool,

  /** A table can specify that its cell contents should remain on a single line and not wrap. */
  singleLine: PropTypes.bool,

  /** A table can also be small or large. */
  size: PropTypes.oneOf(_.without(SUI.SIZES, 'mini', 'tiny', 'medium', 'big', 'huge', 'massive')),

  /** A table may allow a user to sort contents by clicking on a table header. */
  sortable: PropTypes.bool,

  /** A table can specify how it stacks table content responsively. */
  stackable: PropTypes.bool,

  /** A table can stripe alternate rows of content with a darker color to increase contrast. */
  striped: PropTypes.bool,

  /** A table can be formatted to display complex structured data. */
  structured: PropTypes.bool,

  /** Data to be passed to the renderBodyRow function. */
  tableData: customPropTypes.every([
    customPropTypes.disallow(['children']),
    customPropTypes.demand(['renderBodyRow']),
    PropTypes.array,
  ]),

  /** A table can adjust its text alignment. */
  textAlign: PropTypes.oneOf(_.without(SUI.TEXT_ALIGNMENTS, 'justified')),

  /** A table can specify how it stacks table content responsively. */
  unstackable: PropTypes.bool,

  /** A table can adjust its text alignment. */
  verticalAlign: PropTypes.oneOf(SUI.VERTICAL_ALIGNMENTS),
}

Table.Body = TableBody
Table.Cell = TableCell
Table.Footer = TableFooter
Table.Header = TableHeader
Table.HeaderCell = TableHeaderCell
Table.Row = TableRow

export default Table
