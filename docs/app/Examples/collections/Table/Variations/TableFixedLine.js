import React from 'react'
import { Table } from 'stardust'

const TableFixedLine = () => {
  return (
    <Table celled fixed singleLine>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Name</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Description</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>John</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell
            title="This is much too long to fit I'm sorry about that"
          >
            This is much too long to fit I'm sorry about that
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jamie</Table.Cell>
          <Table.Cell>Approved</Table.Cell>
          <Table.Cell>Shorter description</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Jill</Table.Cell>
          <Table.Cell>Denied</Table.Cell>
          <Table.Cell>Shorter description</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export default TableFixedLine
