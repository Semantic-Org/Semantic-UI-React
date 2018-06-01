import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

const TableExampleError = () => (
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
        <Table.Cell>No Name Specified</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
      <Table.Row error>
        <Table.Cell>Jimmy</Table.Cell>
        <Table.Cell>Cannot pull data</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell error>
          <Icon name='attention' />
          Classified
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExampleError
