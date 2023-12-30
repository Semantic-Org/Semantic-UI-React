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

const TableExampleSmall = () => (
  <Table size='small'>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Status</TableHeaderCell>
        <TableHeaderCell>Notes</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow>
        <TableCell>John</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell>None</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jamie</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell>Requires call</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jill</TableCell>
        <TableCell>Denied</TableCell>
        <TableCell>None</TableCell>
      </TableRow>
    </TableBody>

    <TableFooter>
      <TableRow>
        <TableHeaderCell>3 People</TableHeaderCell>
        <TableHeaderCell>2 Approved</TableHeaderCell>
        <TableHeaderCell />
      </TableRow>
    </TableFooter>
  </Table>
)

export default TableExampleSmall
