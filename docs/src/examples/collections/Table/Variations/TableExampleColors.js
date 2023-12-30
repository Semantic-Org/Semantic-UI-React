import React from 'react'
import {
  TableRow,
  TableHeaderCell,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from 'semantic-ui-react'

const colors = [
  'red',
  'orange',
  'yellow',
  'olive',
  'green',
  'teal',
  'blue',
  'violet',
  'purple',
  'pink',
  'brown',
  'grey',
  'black',
]

const TableExampleColors = () => (
  <div>
    {colors.map((color) => (
      <Table color={color} key={color}>
        <TableHeader>
          <TableRow>
            <TableHeaderCell>Food</TableHeaderCell>
            <TableHeaderCell>Calories</TableHeaderCell>
            <TableHeaderCell>Protein</TableHeaderCell>
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell>Apples</TableCell>
            <TableCell>200</TableCell>
            <TableCell>0g</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Orange</TableCell>
            <TableCell>310</TableCell>
            <TableCell>0g</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    ))}
  </div>
)
export default TableExampleColors
