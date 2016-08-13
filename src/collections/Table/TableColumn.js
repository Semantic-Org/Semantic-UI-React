import React, { PropTypes } from 'react'
import { META } from '../../lib'

// This is an abstract component
// it is only used by the user to configure a Table
const TableColumn = (props) => <noscript />

TableColumn.propTypes = {
  cellRenderer: PropTypes.func,
  className: PropTypes.string,
  dataKey: PropTypes.string,
  headerRenderer: PropTypes.func,
}

TableColumn._meta = {
  name: 'TableColumn',
  type: META.TYPES.COLLECTION,
  parent: 'Table',
}

export default TableColumn
