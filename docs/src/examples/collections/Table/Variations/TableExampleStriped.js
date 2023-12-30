import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from 'semantic-ui-react'

const TableExampleStriped = () => (
  <Table striped>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Date Joined</TableHeaderCell>
        <TableHeaderCell>E-mail</TableHeaderCell>
        <TableHeaderCell>Called</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow>
        <TableCell>John Lilki</TableCell>
        <TableCell>September 14, 2013</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>No</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jamie Harington</TableCell>
        <TableCell>January 11, 2014</TableCell>
        <TableCell>jamieharingonton@yahoo.com</TableCell>
        <TableCell>Yes</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jill Lewis</TableCell>
        <TableCell>May 11, 2014</TableCell>
        <TableCell>jilsewris22@yahoo.com</TableCell>
        <TableCell>Yes</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>John Lilki</TableCell>
        <TableCell>September 14, 2013</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>No</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>John Lilki</TableCell>
        <TableCell>September 14, 2013</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>No</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jamie Harington</TableCell>
        <TableCell>January 11, 2014</TableCell>
        <TableCell>jamieharingonton@yahoo.com</TableCell>
        <TableCell>Yes</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jill Lewis</TableCell>
        <TableCell>May 11, 2014</TableCell>
        <TableCell>jilsewris22@yahoo.com</TableCell>
        <TableCell>Yes</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>John Lilki</TableCell>
        <TableCell>September 14, 2013</TableCell>
        <TableCell>jhlilk22@yahoo.com</TableCell>
        <TableCell>No</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

export default TableExampleStriped
