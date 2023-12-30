import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Header,
  Table,
  Rating,
} from 'semantic-ui-react'

const TableExamplePadded = () => (
  <Table celled padded>
    <TableHeader>
      <TableRow>
        <TableHeaderCell singleLine>Evidence Rating</TableHeaderCell>
        <TableHeaderCell>Effect</TableHeaderCell>
        <TableHeaderCell>Efficacy</TableHeaderCell>
        <TableHeaderCell>Consensus</TableHeaderCell>
        <TableHeaderCell>Comments</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow>
        <TableCell>
          <Header as='h2' textAlign='center'>
            A
          </Header>
        </TableCell>
        <TableCell singleLine>Power Output</TableCell>
        <TableCell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </TableCell>
        <TableCell textAlign='right'>
          80% <br />
          <a href='#'>18 studies</a>
        </TableCell>
        <TableCell>
          Creatine supplementation is the reference compound for increasing
          muscular creatine levels; there is variability in this increase,
          however, with some nonresponders.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Header as='h2' textAlign='center'>
            A
          </Header>
        </TableCell>
        <TableCell singleLine>Weight</TableCell>
        <TableCell>
          <Rating icon='star' defaultRating={3} maxRating={3} />
        </TableCell>
        <TableCell textAlign='right'>
          100% <br />
          <a href='#'>65 studies</a>
        </TableCell>
        <TableCell>
          Creatine is the reference compound for power improvement, with numbers
          from one meta-analysis to assess potency
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

export default TableExamplePadded
