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

const TableExampleWarning = () => (
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
        <TableCell>None</TableCell>
      </TableRow>
      <TableRow warning>
        <TableCell>Jimmy</TableCell>
        <TableCell>
          <Icon name='attention' />
          Requires Action
        </TableCell>
        <TableCell>None</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jamie</TableCell>
        <TableCell>Unknown</TableCell>
        <TableCell warning>
          <Icon name='attention' />
          Hostile
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jill</TableCell>
        <TableCell>Unknown</TableCell>
        <TableCell>None</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

export default TableExampleWarning
