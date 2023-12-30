import React from 'react'
import { TableRow, TableCell, TableBody, Icon, Table } from 'semantic-ui-react'

const TableExampleCollapsingCell = () => (
  <Table>
    <TableBody>
      <TableRow>
        <TableCell collapsing>
          <Icon name='folder' />
          node_modules
        </TableCell>
        <TableCell>Initial commit</TableCell>
        <TableCell>10 hours ago</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Icon name='folder' />
          test
        </TableCell>
        <TableCell>Initial commit</TableCell>
        <TableCell>10 hours ago</TableCell>
      </TableRow>
      <TableRow>
        <TableCell>
          <Icon name='folder' />
          build
        </TableCell>
        <TableCell>Initial commit</TableCell>
        <TableCell>10 hours ago</TableCell>
      </TableRow>
    </TableBody>
  </Table>
)

export default TableExampleCollapsingCell
