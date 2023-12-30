import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableFooter,
  TableCell,
  TableBody,
  MenuItem,
  Icon,
  Label,
  Menu,
  Table,
} from 'semantic-ui-react'

const TableExamplePagination = () => (
  <Table celled>
    <TableHeader>
      <TableRow>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
        <TableHeaderCell>Header</TableHeaderCell>
      </TableRow>
    </TableHeader>

    <TableBody>
      <TableRow>
        <TableCell>
          <Label ribbon>First</Label>
        </TableCell>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
        <TableCell>Cell</TableCell>
      </TableRow>
    </TableBody>

    <TableFooter>
      <TableRow>
        <TableHeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <MenuItem as='a' icon>
              <Icon name='chevron left' />
            </MenuItem>
            <MenuItem as='a'>1</MenuItem>
            <MenuItem as='a'>2</MenuItem>
            <MenuItem as='a'>3</MenuItem>
            <MenuItem as='a'>4</MenuItem>
            <MenuItem as='a' icon>
              <Icon name='chevron right' />
            </MenuItem>
          </Menu>
        </TableHeaderCell>
      </TableRow>
    </TableFooter>
  </Table>
)

export default TableExamplePagination
