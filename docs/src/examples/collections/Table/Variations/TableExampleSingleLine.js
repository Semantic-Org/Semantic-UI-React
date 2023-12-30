import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from 'semantic-ui-react'

const TableExampleSingleLine = () => (
  <Table singleLine>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Registration Date</TableHeaderCell>
        <TableHeaderCell>E-mail address</TableHeaderCell>
        <TableHeaderCell>Premium Plan</TableHeaderCell>
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
    </TableBody>
  </Table>
)

export default TableExampleSingleLine
