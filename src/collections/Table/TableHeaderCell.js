import React from 'react'

import { customPropTypes, META } from '../../lib'
import TableCell from './TableCell'

function TableHeaderCell(props) {
  const { as } = props

  return <TableCell {...props} as={as} />
}

TableHeaderCell._meta = {
  name: 'TableHeaderCell',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
}

TableHeaderCell.defaultProps = {
  as: 'th',
}

TableHeaderCell.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,
}

export default TableHeaderCell
