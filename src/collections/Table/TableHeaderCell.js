import cx from 'classnames'
import React, { PropTypes } from 'react'

import {
  customPropTypes,
  getUnhandledProps,
  META,
  useValueAndKey,
} from '../../lib'
import TableCell from './TableCell'

/**
 * A table can have a header cell.
 */
function TableHeaderCell(props) {
  const { as, className, sorted, collapsing } = props
  const classes = cx(
    useValueAndKey(sorted, 'sorted'),
    useKeyOnly(collapsing, 'collapsing'),
    className
  )
  const rest = getUnhandledProps(TableHeaderCell, props)

  return <TableCell {...rest} as={as} className={classes} />
}

TableHeaderCell._meta = {
  name: 'TableHeaderCell',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
}

TableHeaderCell.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string,

  /** A header cell can be sorted in ascending or descending order. */
  sorted: PropTypes.oneOf(['ascending', 'descending']),
  
  /** A header cell can be collapsing so that it only uses as much space as required. */
  collapsing: PropTypes.bool,
}

TableHeaderCell.defaultProps = {
  as: 'th',
}

export default TableHeaderCell
