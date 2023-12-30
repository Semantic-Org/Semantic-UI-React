import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from 'semantic-ui-react'

const TableExampleUnstackable = () => (
  <Table unstackable>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Status</TableHeaderCell>
        <TableHeaderCell textAlign='right'>Notes</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow>
        <TableCell>John</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell textAlign='right'>None</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jamie</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell textAlign='right'>Requires call</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jill</TableCell>
        <TableCell>Denied</TableCell>
        <TableCell textAlign='right'>None</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

export default TableExampleUnstackable
