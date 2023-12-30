import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from 'semantic-ui-react'

const TableExampleSelectableCell = () => (
  <Table celled>
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
        <TableCell>No Action</TableCell>
        <TableCell selectable>
          <a href='#'>Edit</a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jamie</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell selectable>
          <a href='#'>Edit</a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jill</TableCell>
        <TableCell>Denied</TableCell>
        <TableCell selectable>
          <a href='#'>Edit</a>
        </TableCell>
      </TableRow>
      <TableRow warning>
        <TableCell>John</TableCell>
        <TableCell>No Action</TableCell>
        <TableCell selectable warning>
          <a href='#'>Requires change</a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jamie</TableCell>
        <TableCell positive>Approved</TableCell>
        <TableCell selectable positive>
          <a href='#'>Approve</a>
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jill</TableCell>
        <TableCell negative>Denied</TableCell>
        <TableCell selectable negative>
          <a href='#'>Remove</a>
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

export default TableExampleSelectableCell
