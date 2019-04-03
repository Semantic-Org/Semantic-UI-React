import React from 'react'
import { Table } from 'semantic-ui-react'

const ComponentTableHeader = () => (
  <Table.Header>
    <Table.Row>
      <Table.HeaderCell>Name</Table.HeaderCell>
      <Table.HeaderCell>Default</Table.HeaderCell>
      <Table.HeaderCell>Type</Table.HeaderCell>
      <Table.HeaderCell>Description</Table.HeaderCell>
    </Table.Row>
  </Table.Header>
)

const areEqual = () => true

export default React.memo(ComponentTableHeader, areEqual)
