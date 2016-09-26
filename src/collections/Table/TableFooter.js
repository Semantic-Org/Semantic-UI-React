import React from 'react'

import { META } from '../../lib'
import TableHeader from './TableHeader'

function TableFooter(props) {
  return <TableHeader {...props} />
}

TableFooter._meta = {
  name: 'TableFooter',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
}

TableFooter.defaultProps = {
  as: 'tfoot',
}

export default TableFooter
