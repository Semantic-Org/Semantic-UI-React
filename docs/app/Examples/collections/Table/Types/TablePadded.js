import React from 'react'
import { Header, Table, Rating } from 'stardust'

const TablePadded = () => {
  return (
    <Table celled padded>
      <Table.Header>
        <Table.Row>
          <Table.Cell as='th' singleLine>Evidence Rating</Table.Cell>
          <Table.Cell as='th'>Effect</Table.Cell>
          <Table.Cell as='th'>Efficacy</Table.Cell>
          <Table.Cell as='th'>Consensus</Table.Cell>
          <Table.Cell as='th'>Comments</Table.Cell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>
            <Header as='h2' textAlign='center'>A</Header>
          </Table.Cell>
          <Table.Cell singleLine>Power Output</Table.Cell>
          <Table.Cell>
            <Rating icon='star' defaultRating={3} maxRating={3} />
          </Table.Cell>
          <Table.Cell textAlign='right'>
            80% <br />
            <a href='#'>18 studies</a>
          </Table.Cell>
          <Table.Cell>
            Creatine supplementation is the reference compound for increasing muscular creatine levels; there is
            variability in this increase, however, with some nonresponders.
          </Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>
            <Header as='h2' textAlign='center'>A</Header>
          </Table.Cell>
          <Table.Cell singleLine>Weight</Table.Cell>
          <Table.Cell>
            <Rating icon='star' defaultRating={3} maxRating={3} />
          </Table.Cell>
          <Table.Cell textAlign='right'>
            100% <br />
            <a href='#'>65 studies</a>
          </Table.Cell>
          <Table.Cell>
            Creatine is the reference compound for power improvement, with numbers from one meta-analysis to assess
            potency
          </Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

export default TablePadded
