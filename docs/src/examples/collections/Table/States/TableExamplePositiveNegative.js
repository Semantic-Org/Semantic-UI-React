import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

const TableExamplePositiveNegative = () => (
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
        <Table.Cell negative>None</Table.Cell>
      </Table.Row>
      <Table.Row positive>
        <Table.Cell>Jimmy</Table.Cell>
        <Table.Cell>
          <Icon name='checkmark' />
          Approved
        </Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Unknown</Table.Cell>
        <Table.Cell positive>
          <Icon name='close' />
          Requires call
        </Table.Cell>
      </Table.Row>
      <Table.Row negative>
        <Table.Cell>Jill</Table.Cell>
        <Table.Cell>Unknown</Table.Cell>
        <Table.Cell>None</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExamplePositiveNegative
