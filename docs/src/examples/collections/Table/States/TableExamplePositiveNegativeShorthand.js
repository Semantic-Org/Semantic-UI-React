import React from 'react'
import { Table } from 'semantic-ui-react'

const tableData = [
  { name: undefined, approved: undefined, notes: undefined },
  { name: 'Jimmy', approved: true, notes: undefined },
  { name: 'Jamie', approved: undefined, notes: 'Requires call' },
  { name: 'Jill', approved: undefined, notes: undefined },
]

const headerRow = ['Name', 'Status', 'Notes']

const renderBodyRow = ({ name, approved, notes }, i) => ({
  key: name || `row-${i}`,
  positive: approved,
  negative: !!(name && name.match('Jill')),
  cells: [
    name || 'No name specified',
    approved ? { key: 'status', icon: 'checkmark', content: 'Approved' } : 'Unknown',
    {
      key: 'notes',
      icon: 'close',
      content: notes || 'None',
      positive: !!notes,
      negative: !approved && !notes,
    },
  ],
})

const TableExamplePositiveNegativeShorthand = () => (
  <Table celled headerRow={headerRow} renderBodyRow={renderBodyRow} tableData={tableData} />
)

export default TableExamplePositiveNegativeShorthand
