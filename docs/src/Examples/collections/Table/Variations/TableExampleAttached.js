import React from 'react'
import { Table } from 'semantic-ui-react'

const header = (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Header</Table.HeaderCell>
      <Table.HeaderCell>Header</Table.HeaderCell>
      <Table.HeaderCell>Header</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
)
const body = (
  <Table.Body>
    <Table.Row>
      <Table.Cell>Cell</Table.Cell>
      <Table.Cell>Cell</Table.Cell>
      <Table.Cell>Cell</Table.Cell>
    </Table.Row>
  </Table.Body>
)

const TableExampleAttached = () => (
  <div>
    <Table attached='top' basic>
      {header}
      {body}
    </Table>

    <Table attached>{body}</Table>

    <Table attached celled selectable>
      {body}
    </Table>

    <Table attached='bottom' celled>
      {header}
      {body}
    </Table>
  </div>
)

export default TableExampleAttached
