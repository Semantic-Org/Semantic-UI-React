import React from 'react'
import { Icon, Table } from 'semantic-ui-react'

const TableExampleStructured = () => (
  <Table celled structured>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell rowSpan='2'>Name</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Type</Table.HeaderCell>
        <Table.HeaderCell rowSpan='2'>Files</Table.HeaderCell>
        <Table.HeaderCell colSpan='3'>Languages</Table.HeaderCell>
      </Table.Row>
      <Table.Row>
        <Table.HeaderCell>Ruby</Table.HeaderCell>
        <Table.HeaderCell>JavaScript</Table.HeaderCell>
        <Table.HeaderCell>Python</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      <Table.Row>
        <Table.Cell>Alpha Team</Table.Cell>
        <Table.Cell>Project 1</Table.Cell>
        <Table.Cell textAlign='right'>2</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell rowSpan='3'>Beta Team</Table.Cell>
        <Table.Cell>Project 1</Table.Cell>
        <Table.Cell textAlign='right'>52</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell>Project 2</Table.Cell>
        <Table.Cell textAlign='right'>12</Table.Cell>
        <Table.Cell />
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
      </Table.Row>
      <Table.Row>
        <Table.Cell>Project 3</Table.Cell>
        <Table.Cell textAlign='right'>21</Table.Cell>
        <Table.Cell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </Table.Cell>
        <Table.Cell />
        <Table.Cell />
      </Table.Row>
    </Table.Body>
  </Table>
)

export default TableExampleStructured
