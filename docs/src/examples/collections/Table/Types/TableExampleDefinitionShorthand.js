import React from 'react'
import { Table } from 'semantic-ui-react'

const headerRow = ['', 'Arguments', 'Description']

const functions = [
  {
    name: 'reset rating',
    arg: 'None',
    desc: 'Resets rating to default value',
  },
  {
    name: 'set rating',
    arg: 'rating (integer)',
    desc: 'Sets the current star rating to specified value',
  },
]

const renderBodyRow = ({ name, arg, desc }) => ({
  key: name,
  cells: [name, arg, desc],
})

const TableExampleDefinitionShorthand = () => (
  <Table definition headerRow={headerRow} renderBodyRow={renderBodyRow} tableData={functions} />
)

export default TableExampleDefinitionShorthand
