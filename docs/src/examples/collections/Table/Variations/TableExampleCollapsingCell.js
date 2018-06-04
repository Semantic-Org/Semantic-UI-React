import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

const TableExampleCollapsingCell = () => (
  <Table>
    <Table.Body>
      <Table.Row>
        <Table.Cell collapsing>
          <Icon name='folder' />
          node_modules
        </Table.Cell>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell>10 hours ago</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Icon name='folder' />
          test
        </Table.Cell>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell>10 hours ago</Table.Cell>
      </Table.Row>
      <Table.Row>
        <Table.Cell>
          <Icon name='folder' />
          build
        </Table.Cell>
        <Table.Cell>Initial commit</Table.Cell>
        <Table.Cell>10 hours ago</Table.Cell>
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExampleCollapsingCell
