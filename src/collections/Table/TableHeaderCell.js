import cx from 'classnames'
import React, { PropTypes } from 'react'
import {
  customPropTypes,
  getUnhandledProps,
  META,
  useValueAndKey,
} from '../../lib'
import TableCell from './TableCell'

function TableHeaderCell(props) {
  const { as, className, sorted } = props
  const classes = cx(
    useValueAndKey(sorted, 'sorted'),
    className
  )
  const rest = getUnhandledProps(TableHeaderCell, props)
  return <TableCell as={as} {...rest} className={classes} />
}

TableHeaderCell._meta = {
  name: 'TableHeaderCell',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
  props: {
    sorted: ['ascending', 'descending'],
  },
}

TableHeaderCell.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Additional classes. */
  className: PropTypes.string,

  /** A header cell can be sorted in ascending or descending order. */
  sorted: PropTypes.oneOf(TableHeaderCell._meta.props.sorted),
}

TableHeaderCell.defaultProps = {
  as: 'th',
}

export default TableHeaderCell
