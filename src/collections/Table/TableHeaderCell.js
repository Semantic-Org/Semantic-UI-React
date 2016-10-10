import React from 'react'

import { META } from '../../lib'
import TableCell from './TableCell'

function TableHeaderCell(props) {
  return <TableCell {...props} />
}

TableHeaderCell._meta = {
  name: 'TableHeaderCell',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
}

TableHeaderCell.defaultProps = {
  as: 'th',
}

export default TableHeaderCell
