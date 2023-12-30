import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from 'semantic-ui-react'

const TableExampleDisabled = () => (
  <Table celled>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Status</TableHeaderCell>
        <TableHeaderCell>Notes</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow disabled>
        <TableCell>Jamie</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell>Requires call</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>John</TableCell>
        <TableCell>Selected</TableCell>
        <TableCell>None</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jamie</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell>Requires call</TableCell>
      </TableRow>
      <TableRow>
        <TableCell disabled>Jill</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell>None</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

export default TableExampleDisabled
