import React from 'react'
import { Table } from 'semantic-ui-react'

const tableData = [
  { name: undefined, status: 'Approved', notes: undefined },
  { name: 'Jimmy', status: 'Cannot pull data', notes: undefined },
  { name: 'Jamie', status: 'Approved', notes: 'Classified' },
  { name: 'Jill', status: 'Approved', notes: undefined },
]

const headerRow = ['Name', 'Status', 'Notes']

const renderBodyRow = ({ name, status, notes }, i) => ({
  key: name || `row-${i}`,
  error: !!(status && status.match('Cannot pull data')),
  cells: [
    name || 'No name specified',
    status || 'Unknown',
    notes
      ? {
        key: 'notes',
        icon: notes.match('Classified') ? 'attention' : null,
        content: notes,
        error: notes.match('Classified'),
      }
      : 'None',
  ],
})

const TableExampleErrorShorthand = () => (
  <Table celled headerRow={headerRow} renderBodyRow={renderBodyRow} tableData={tableData} />
)

export default TableExampleErrorShorthand
