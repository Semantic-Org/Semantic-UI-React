import React from 'react'
import { Table } from 'semantic-ui-react'

const TableExampleVeryPadded = () => (
  <Table padded='very'>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Name</Table.HeaderCell>
        <Table.HeaderCell>Status</Table.HeaderCell>
        <Table.HeaderCell>Notes</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>John</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>
          He is a very nice guy and I enjoyed talking to him on the telephone. I
          hope we get to talk again.
        </Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>Jamie</Table.Cell>
        <Table.Cell>Approved</Table.Cell>
        <Table.Cell>
          Jamie was not interested in purchasing our product.
        </Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExampleVeryPadded
