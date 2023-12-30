import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from 'semantic-ui-react'

const TableExampleFixed = () => (
  <Table fixed>
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
        <TableCell>
          John is an interesting boy but sometimes you don't really have enough
          room to describe everything you'd like
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jamie</TableCell>
        <TableCell>Approved</TableCell>
        <TableCell>
          Jamie is a kind girl but sometimes you don't really have enough room
          to describe everything you'd like
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Jill</TableCell>
        <TableCell>Denied</TableCell>
        <TableCell>
          Jill is an alright girl but sometimes you don't really have enough
          room to describe everything you'd like
        </TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

export default TableExampleFixed
