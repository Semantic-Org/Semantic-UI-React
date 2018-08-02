import React from 'react'
import { Table } from 'semantic-ui-react'

const tableData = [
  { id: '1', name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { id: '2', name: 'John', status: 'Selected', notes: undefined },
  { id: '3', name: 'Jamie', status: 'Approved', notes: 'Requires call' },
  { id: '4', name: 'Jill', status: 'Approved', notes: undefined },
]

const headerRow = ['Name', 'Status', 'Notes']

const renderBodyRow = ({ id, name, status, notes }, i) => ({
  key: id || `row-${i}`,
  disabled: i === 0,
  cells: [
    name ? { key: 'name', content: name, disabled: name.match('Jill') } : 'No name specified',
    status || 'Unknown',
    notes || 'None',
  ],
})

const TableExampleDisabledShorthand = () => (
  <Table celled headerRow={headerRow} renderBodyRow={renderBodyRow} tableData={tableData} />
)

export default TableExampleDisabledShorthand
