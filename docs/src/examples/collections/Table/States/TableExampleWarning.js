import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

const TableExampleWarning = () => (
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
        <Table.Cell>Unknown</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
      <Table.Row warning>
        <Table.Cell>Jimmy</Table.Cell>
        <Table.Cell>
          <Icon name='attention' />
          Requires Action
        </Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Unknown</Table.Cell>
        <Table.Cell warning>
          <Icon name='attention' />
          Hostile
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Unknown</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExampleWarning
