import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from 'semantic-ui-react'

const header = (
  <TableHeader>
    <TableRow>
      <TableHeaderCell>Header</TableHeaderCell>
      <TableHeaderCell>Header</TableHeaderCell>
      <TableHeaderCell>Header</TableHeaderCell>
    </TableRow>
  </TableHeader>
)
const body = (
  <TableBody>
    <TableRow>
      <TableCell>Cell</TableCell>
      <TableCell>Cell</TableCell>
      <TableCell>Cell</TableCell>
    </TableRow>
  </TableBody>
)

const TableExampleAttached = () => (
  <div>
    <Table attached='top' basic>
      {header}
      {body}
    </Table>

    <Table attached>{body}</Table>

    <Table attached celled selectable>
      {body}
    </Table>

    <Table attached='bottom' celled>
      {header}
      {body}
    </Table>
  </div>
)

export default TableExampleAttached
