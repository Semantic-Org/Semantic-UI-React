import React from 'react'
import { Icon, Table } from 'stardust'

const TablePositiveNegative = () => {
  return (
    <Table celled>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Notes</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <td>No Name Specified</td>
          <td>Approved</td>
          <td>None</td>
        </Table.Row>
        <Table.Row error>
          <td>Jimmy</td>
          <td>Cannot pull data</td>
          <td>None</td>
        </Table.Row>
        <Table.Row>
          <td>Jamie</td>
          <td>Approved</td>
          <Table.Cell error>
            <Icon name='attention' />
            Classified
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <td>Jill</td>
          <td>Approved</td>
          <td>None</td>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export default TablePositiveNegative
