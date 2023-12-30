import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  Button,
  Checkbox,
  Icon,
  Table,
} from 'semantic-ui-react'

const TableExampleApprove = () => (
  <Table compact celled definition>
    <TableHeader>
      <TableRow>
        <TableHeaderCell />
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Registration Date</TableHeaderCell>
        <TableHeaderCell>E-mail address</TableHeaderCell>
        <TableHeaderCell>Premium Plan</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow>
        <TableCell collapsing>
          <Checkbox slider />
        </TableCell>
        <TableCell>John Lilki</TableCell>
        <TableCell>September 14, 2013</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>No</TableCell>
      </TableRow>
      <TableRow>
        <TableCell collapsing>
          <Checkbox slider />
        </TableCell>
        <TableCell>Jamie Harington</TableCell>
        <TableCell>January 11, 2014</TableCell>
        <TableCell>jamieharingonton@yahoo.com</TableCell>
        <TableCell>Yes</TableCell>
      </TableRow>
      <TableRow>
        <TableCell collapsing>
          <Checkbox slider />
        </TableCell>
        <TableCell>Jill Lewis</TableCell>
        <TableCell>May 11, 2014</TableCell>
        <TableCell>jilsewris22@yahoo.com</TableCell>
        <TableCell>Yes</TableCell>
      </TableRow>
    </TableBody>

    <TableFooter fullWidth>
      <TableRow>
        <TableHeaderCell />
        <TableHeaderCell colSpan='4'>
          <Button
            floated='right'
            icon
            labelPosition='left'
            primary
            size='small'
          >
            <Icon name='user' /> Add User
          </Button>
          <Button size='small'>Approve</Button>
          <Button disabled size='small'>
            Approve All
          </Button>
        </TableHeaderCell>
      </TableRow>
    </TableFooter>
  </Table>
)

export default TableExampleApprove
