import React from 'react'
import { Table } from 'semantic-ui-react'

const TableExampleColumnCount = () => (
  <Table columns={5}>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Age</Table.HeaderCell>
        <Table.HeaderCell>Gender</Table.HeaderCell>
        <Table.HeaderCell>Notes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>22</Table.Cell>
        <Table.Cell>Male</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>32</Table.Cell>
        <Table.Cell>Male</Table.Cell>
        <Table.Cell>Requires call</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Denied</Table.Cell>
        <Table.Cell>22</Table.Cell>
        <Table.Cell>Other</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell>3 People</Table.HeaderCell>
        <Table.HeaderCell>2 Approved</Table.HeaderCell>
        <Table.HeaderCell />
        <Table.HeaderCell />
        <Table.HeaderCell />
      </Table.Row>
    </Table.Footer>
  </Table>
)

export default TableExampleColumnCount
