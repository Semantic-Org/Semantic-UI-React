import React from 'react'
import { Icon, Table } from 'stardust'

const headerRow = [
  'Name',
  'Status',
  'Notes',
]

const bodyRow = ({ name, status, notes }) => ({
  warning: !!(status && status.match('Requires Action')),
  items: [
    name || 'No name specified',
    status
      ? { icon: 'attention', content: status }
      : 'Unknown',
    notes
      ? { icon: 'attention', content: notes, warning: true }
      : 'None',
  ]
})

const tableData = [
  { name: undefined, status: undefined, notes: undefined },
  { name: 'Jimmy', status: 'Requires Action', notes: undefined },
  { name: 'Jamie', status: undefined, notes: 'Hostile' },
  { name: 'Jill', status: undefined, notes: undefined },
]

const TableWarningShorthand = () => {
  return (
    <Table celled headerRow={headerRow} bodyRow={bodyRow} tableData={tableData} />
  )
}

export default TableWarningShorthand
