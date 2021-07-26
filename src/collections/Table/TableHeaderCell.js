import cx from 'clsx'
import PropTypes from 'prop-types'
import React from 'react'

import { getUnhandledProps, useValueAndKey } from '../../lib'
import TableCell from './TableCell'

/**
 * A table can have a header cell.
 */
const TableHeaderCell = React.forwardRef(function (props, ref) {
  const { as, className, sorted } = props
  const classes = cx(useValueAndKey(sorted, 'sorted'), className)
  const rest = getUnhandledProps(TableHeaderCell, props)

  return <TableCell {...rest} as={as} className={classes} ref={ref} />
})

TableHeaderCell.displayName = 'TableHeaderCell'
TableHeaderCell.propTypes = {
  /** An element type to render as (string or function). */
  as: PropTypes.elementType,

  /** Additional classes. */
  className: PropTypes.string,

  /** A header cell can be sorted in ascending or descending order. */
  sorted: PropTypes.oneOf(['ascending', 'descending']),
}

TableHeaderCell.defaultProps = {
  as: 'th',
}

export default TableHeaderCell
