import React, { PropTypes } from 'react'
import META from '../../utils/Meta'

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
  library: META.library.semanticUI,
  name: 'TableColumn',
  type: META.type.collection,
  parent: 'Table',
}

export default TableColumn
