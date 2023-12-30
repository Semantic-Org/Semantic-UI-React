import React from 'react'
import {
  TableRow,
  TableCell,
  TableBody,
  Divider,
  Header,
  Icon,
  Table,
} from 'semantic-ui-react'

const DividerExampleHorizontalTable = () => (
  <>
    <Divider horizontal>
      <Header as='h4'>
        <Icon name='tag' />
        Description
      </Header>
    </Divider>

    <p>
      Doggie treats are good for all times of the year. Proven to be eaten by
      99.9% of all dogs worldwide.
    </p>

    <Divider horizontal>
      <Header as='h4'>
        <Icon name='bar chart' />
        Specifications
      </Header>
    </Divider>

    <Table definition>
      <TableBody>
        <TableRow>
          <TableCell width={2}>Size</TableCell>
          <TableCell>1" x 2"</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Weight</TableCell>
          <TableCell>6 ounces</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Color</TableCell>
          <TableCell>Yellowish</TableCell>
        </TableRow>
        <TableRow>
          <TableCell>Odor</TableCell>
          <TableCell>Not Much Usually</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </>
)

export default DividerExampleHorizontalTable
