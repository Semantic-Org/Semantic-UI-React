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

const TableExamplePositiveNegative = () => (
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
        <TableCell>Unknown</TableCell>
        <TableCell negative>None</TableCell>
      </TableRow>
      <TableRow positive>
        <TableCell>Jimmy</TableCell>
        <TableCell>
          <Icon name='checkmark' />
          Approved
        </TableCell>
        <TableCell>None</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jamie</TableCell>
        <TableCell>Unknown</TableCell>
        <TableCell positive>
          <Icon name='close' />
          Requires call
        </TableCell>
      </TableRow>
      <TableRow negative>
        <TableCell>Jill</TableCell>
        <TableCell>Unknown</TableCell>
        <TableCell>None</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

export default TableExamplePositiveNegative
