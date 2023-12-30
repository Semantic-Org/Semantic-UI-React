import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from 'semantic-ui-react'

const TableExampleFixedLine = () => (
  <Table celled fixed singleLine>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Status</TableHeaderCell>
        <TableHeaderCell>Description</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow>
        <TableCell>John</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell
          title={[
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore',
            'et dolore magna aliqua.',
          ].join(' ')}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jamie</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell>Shorter description</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jill</TableCell>
        <TableCell>Denied</TableCell>
        <TableCell>Shorter description</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

export default TableExampleFixedLine
