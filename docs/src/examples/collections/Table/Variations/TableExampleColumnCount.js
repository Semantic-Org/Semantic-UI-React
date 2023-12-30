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

const TableExampleColumnCount = () => (
  <Table columns={5}>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Status</TableHeaderCell>
        <TableHeaderCell>Age</TableHeaderCell>
        <TableHeaderCell>Gender</TableHeaderCell>
        <TableHeaderCell>Notes</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow>
        <TableCell>John</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell>22</TableCell>
        <TableCell>Male</TableCell>
        <TableCell>None</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jamie</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell>32</TableCell>
        <TableCell>Male</TableCell>
        <TableCell>Requires call</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jill</TableCell>
        <TableCell>Denied</TableCell>
        <TableCell>22</TableCell>
        <TableCell>Other</TableCell>
        <TableCell>None</TableCell>
      </TableRow>
    </TableBody>

    <TableFooter>
      <TableRow>
        <TableHeaderCell>3 People</TableHeaderCell>
        <TableHeaderCell>2 Approved</TableHeaderCell>
        <TableHeaderCell />
        <TableHeaderCell />
        <TableHeaderCell />
      </TableRow>
    </TableFooter>
  </Table>
)

export default TableExampleColumnCount
