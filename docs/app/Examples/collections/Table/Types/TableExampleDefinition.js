import React from 'react'
import { Table } from 'semantic-ui-react'

const TableExampleDefinition = () => (
  <Table definition>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell />
        <Table.HeaderCell>Arguments</Table.HeaderCell>
        <Table.HeaderCell>Description</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>reset rating</Table.Cell>
        <Table.Cell>None</Table.Cell>
        <Table.Cell>Resets rating to default value</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>set rating</Table.Cell>
        <Table.Cell>rating (integer)</Table.Cell>
        <Table.Cell>Sets the current star rating to specified value</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExampleDefinition
