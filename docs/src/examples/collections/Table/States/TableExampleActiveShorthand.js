import React from 'react'
import { Table } from 'semantic-ui-react'

const tableData = [
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'John', status: 'Selected', notes: undefined },
  { name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { name: 'Jill', status: 'Approved', notes: undefined },
]

const headerRow = ['Name', 'Status', 'Notes']

const renderBodyRow = ({ name, status, notes }, i) => ({
  key: name || `row-${i}`,
  active: !!(status && status.match('Selected')),
  cells: [
    name ? { key: 'name', content: name, active: name.match('Jill') } : 'No name specified',
    status || 'Unknown',
    notes || 'None',
  ],
})

const TableExampleActiveShorthand = () => (
  <Table celled headerRow={headerRow} renderBodyRow={renderBodyRow} tableData={tableData} />
)

export default TableExampleActiveShorthand
