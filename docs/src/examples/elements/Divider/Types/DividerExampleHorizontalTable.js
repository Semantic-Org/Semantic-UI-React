import React from 'react'
import { Divider, Header, Icon, Table } from 'semantic-ui-react'

const DividerExampleHorizontalTable = () => (
  <React.Fragment>
    <Divider horizontal>
      <Header as='h4'>
        <Icon name='tag' />
        Description
      </Header>
    </Divider>

    <p>
      Doggie treats are good for all times of the year. Proven to be eaten by 99.9% of all dogs
      worldwide.
    </p>

    <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
        Specifications
      </Header>
    </Divider>

    <Table definition>
      <Table.Body>
        <Table.Row>
          <Table.Cell width={2}>Size</Table.Cell>
          <Table.Cell>1" x 2"</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Weight</Table.Cell>
          <Table.Cell>6 ounces</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Color</Table.Cell>
          <Table.Cell>Yellowish</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Odor</Table.Cell>
          <Table.Cell>Not Much Usually</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  </React.Fragment>
)

export default DividerExampleHorizontalTable
