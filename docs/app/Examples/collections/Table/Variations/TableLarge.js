import React from 'react'
import { Table } from 'stardust'

const TableLarge = () => {
  return (
    <Table size='large'>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <td>John</td>
          <td>Approved</td>
          <td>None</td>
        </Table.Row>
        <Table.Row>
          <td>Jamie</td>
          <td>Approved</td>
          <td>Requires call</td>
        </Table.Row>
        <Table.Row>
          <td>Jill</td>
          <td>Denied</td>
          <td>None</td>
        </Table.Row>
      </Table.Body>

      <Table.Footer>
        <Table.Row>
          <Table.HeaderCell>3 People</Table.HeaderCell>
          <Table.HeaderCell>2 Approved</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Footer>
    </Table>
  )
}

export default TableLarge
