import _ from 'lodash/fp'
import React, { PropTypes } from 'react'

import Table from '../../collections/Table'

const pointingStyle = { cursor: 'pointer' }
// TODO if we allow configuring the table, we should not override the border style
// example, a `celled` table would certainly need borders
const cellStyle = { border: 'none' }

/**
 * A DateTimeGrid displays a grid of options in a DateTime component.
 */
const DateTimeGrid = props => {
  const { headers, columns, cells } = props
  const colSpan = Math.round(columns / headers.length)

  return (
    <div>
      <Table unstackable basic='very' attached='bottom' size='small' compact='very' textAlign='center'>
        <Table.Header>
          <Table.Row>
            {headers.map(header => (
              <Table.HeaderCell key={header} colSpan={colSpan}>
                {header}
              </Table.HeaderCell>
            ))}
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {_.chunk(columns, cells).map((row) => (
            <Table.Row key={_.map('content', row)}>
              {row.map(({ active, content, style = {}, ...rest }) => (
                <Table.Cell key={content} selectable style={{ ...cellStyle, ...style }} {...rest}>
                  <a style={pointingStyle}>{content}</a>
                </Table.Cell>
              ))}
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  )
}

DateTimeGrid.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  columns: PropTypes.number,
  cells: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
  })),
}

export default DateTimeGrid
