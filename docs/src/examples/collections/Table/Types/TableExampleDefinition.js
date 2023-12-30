import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from 'semantic-ui-react'

const TableExampleDefinition = () => (
  <Table definition>
    <TableHeader>
      <TableRow>
        <TableHeaderCell />
        <TableHeaderCell>Arguments</TableHeaderCell>
        <TableHeaderCell>Description</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow>
        <TableCell>reset rating</TableCell>
        <TableCell>None</TableCell>
        <TableCell>Resets rating to default value</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>set rating</TableCell>
        <TableCell>rating (integer)</TableCell>
        <TableCell>Sets the current star rating to specified value</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

export default TableExampleDefinition
