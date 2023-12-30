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

const TableExampleStructured = () => (
  <Table celled structured>
    <TableHeader>
      <TableRow>
        <TableHeaderCell rowSpan='2'>Name</TableHeaderCell>
        <TableHeaderCell rowSpan='2'>Type</TableHeaderCell>
        <TableHeaderCell rowSpan='2'>Files</TableHeaderCell>
        <TableHeaderCell colSpan='3'>Languages</TableHeaderCell>
      </TableRow>
      <TableRow>
        <TableHeaderCell>Ruby</TableHeaderCell>
        <TableHeaderCell>JavaScript</TableHeaderCell>
        <TableHeaderCell>Python</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow>
        <TableCell>Alpha Team</TableCell>
        <TableCell>Project 1</TableCell>
        <TableCell textAlign='right'>2</TableCell>
        <TableCell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </TableCell>
        <TableCell />
        <TableCell />
      </TableRow>
      <TableRow>
        <TableCell rowSpan='3'>Beta Team</TableCell>
        <TableCell>Project 1</TableCell>
        <TableCell textAlign='right'>52</TableCell>
        <TableCell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </TableCell>
        <TableCell />
        <TableCell />
      </TableRow>
      <TableRow>
        <TableCell>Project 2</TableCell>
        <TableCell textAlign='right'>12</TableCell>
        <TableCell />
        <TableCell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </TableCell>
        <TableCell />
      </TableRow>
      <TableRow>
        <TableCell>Project 3</TableCell>
        <TableCell textAlign='right'>21</TableCell>
        <TableCell textAlign='center'>
          <Icon color='green' name='checkmark' size='large' />
        </TableCell>
        <TableCell />
        <TableCell />
      </TableRow>
    </TableBody>
  </Table>
)

export default TableExampleStructured
