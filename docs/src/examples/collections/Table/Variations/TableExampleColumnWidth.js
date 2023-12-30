import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  Table,
} from 'semantic-ui-react'

const TableExampleColumnWidth = () => (
  <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderCell width={10}>Name</TableHeaderCell>
        <TableHeaderCell width='six'>Status</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow>
        <TableCell>John</TableCell>
        <TableCell>Approved</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jamie</TableCell>
        <TableCell>Approved</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jill</TableCell>
        <TableCell>Denied</TableCell>
      </TableRow>
    </TableBody>

    <TableFooter>
      <TableRow>
        <TableHeaderCell>3 People</TableHeaderCell>
        <TableHeaderCell>2 Approved</TableHeaderCell>
      </TableRow>
    </TableFooter>
  </Table>
)

export default TableExampleColumnWidth
