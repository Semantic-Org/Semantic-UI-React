import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Icon,
  Table,
} from 'semantic-ui-react'

const TableExampleError = () => (
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
        <TableCell>No Name Specified</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell>None</TableCell>
      </TableRow>
      <TableRow error>
        <TableCell>Jimmy</TableCell>
        <TableCell>Cannot pull data</TableCell>
        <TableCell>None</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jamie</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell error>
          <Icon name='attention' />
          Classified
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jill</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell>None</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

export default TableExampleError
