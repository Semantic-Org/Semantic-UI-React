import React from 'react'
import { Table } from 'semantic-ui-react'

const headerRow = [
  'Name',
  'Status',
  'Notes',
]

const renderBodyRow = ({ name, status, notes }) => ({
  warning: !!(status && status.match('Requires Action')),
  cells: [
    name || 'No name specified',
    status
      ? { icon: 'attention', content: status }
      : 'Unknown',
    notes
      ? { icon: 'attention', content: notes, warning: true }
      : 'None',
  ],
})

const tableData = [
  { name: undefined, status: undefined, notes: undefined },
  { name: 'Jimmy', status: 'Requires Action', notes: undefined },
  { name: 'Jamie', status: undefined, notes: 'Hostile' },
  { name: 'Jill', status: undefined, notes: undefined },
]

const TableExampleWarningShorthand = () => {
  return (
    <Table celled headerRow={headerRow} renderBodyRow={renderBodyRow} tableData={tableData} />
  )
}

export default TableExampleWarningShorthand
