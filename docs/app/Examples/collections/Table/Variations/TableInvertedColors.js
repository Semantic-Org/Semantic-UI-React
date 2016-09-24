import React, { PropTypes } from 'react'
import { Table } from 'stardust'

const TableInvertedColored = (props) => {
  const { color } = props

  return (
    <Table color={color} inverted>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>Food</Table.HeaderCell>
          <Table.HeaderCell>Calories</Table.HeaderCell>
          <Table.HeaderCell>Protein</Table.HeaderCell>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        <Table.Row>
          <Table.Cell>Apples</Table.Cell>
          <Table.Cell>200</Table.Cell>
          <Table.Cell>0g</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Orange</Table.Cell>
          <Table.Cell>310</Table.Cell>
          <Table.Cell>0g</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>
  )
}

TableInvertedColored.propTypes = {
  color: PropTypes.string,
}

const colors = [
  'red', 'orange', 'yellow', 'olive', 'green', 'teal', 'blue', 'violet', 'purple', 'pink', 'brown', 'grey', 'black',
]
const TableInvertedColors = () => (
  <div>
    {colors.map(color => <TableInvertedColored color={color} key={color} />)}
  </div>
)

export default TableInvertedColors
