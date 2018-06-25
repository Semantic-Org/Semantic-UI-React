import React from 'react'
import { Table } from 'semantic-ui-react'

const TableExampleColumnWidth = () => (
  <Table>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell width={10}>Name</Table.HeaderCell>
        <Table.HeaderCell width='six'>Status</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Denied</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell>3 People</Table.HeaderCell>
        <Table.HeaderCell>2 Approved</Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default TableExampleColumnWidth
