import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from 'semantic-ui-react'

const TableExampleCompact = () => (
  <Table compact>
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
        <TableCell>John</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell>None</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jamie</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell>Requires call</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

export default TableExampleCompact
