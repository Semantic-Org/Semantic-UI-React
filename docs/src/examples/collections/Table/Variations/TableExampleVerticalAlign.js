import React from 'react'
import { Table } from 'semantic-ui-react'

const TableExampleVerticalAlign = () => (
  <Table striped>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Notes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row verticalAlign='top'>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell verticalAlign='top'>
          Notes
          <br />
          1<br />
          2<br />
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell verticalAlign='bottom'>Approved</Table.Cell>
        <Table.Cell>
          Notes
          <br />
          1<br />
          2<br />
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExampleVerticalAlign
