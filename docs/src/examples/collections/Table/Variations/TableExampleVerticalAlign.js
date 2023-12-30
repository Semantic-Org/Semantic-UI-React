import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from 'semantic-ui-react'

const TableExampleVerticalAlign = () => (
  <Table striped>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Status</TableHeaderCell>
        <TableHeaderCell>Notes</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow verticalAlign='top'>
        <TableCell>John</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell verticalAlign='top'>
          Notes
          <br />
          1<br />
          2<br />
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jamie</TableCell>
        <TableCell verticalAlign='bottom'>Approved</TableCell>
        <TableCell>
          Notes
          <br />
          1<br />
          2<br />
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

export default TableExampleVerticalAlign
