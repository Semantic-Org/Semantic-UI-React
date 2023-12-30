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

const TableExampleCelledStriped = () => (
  <Table celled striped>
    <TableHeader>
      <TableRow>
        <TableHeaderCell colSpan='3'>Git Repository</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow>
        <TableCell collapsing>
          <Icon name='folder' /> node_modules
        </TableCell>
        <TableCell>Initial commit</TableCell>
        <TableCell collapsing textAlign='right'>
          10 hours ago
        </TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Icon name='folder' /> test
        </TableCell>
        <TableCell>Initial commit</TableCell>
        <TableCell textAlign='right'>10 hours ago</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Icon name='folder' /> build
        </TableCell>
        <TableCell>Initial commit</TableCell>
        <TableCell textAlign='right'>10 hours ago</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Icon name='file outline' /> package.json
        </TableCell>
        <TableCell>Initial commit</TableCell>
        <TableCell textAlign='right'>10 hours ago</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Icon name='file outline' /> Gruntfile.js
        </TableCell>
        <TableCell>Initial commit</TableCell>
        <TableCell textAlign='right'>10 hours ago</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

export default TableExampleCelledStriped
