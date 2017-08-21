import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React from 'react'

import Table from '../../collections/Table'

const pointingStyle = { cursor: 'pointer' }
// TODO if we allow configuring the table, we should not override the border style
// example, a `celled` table would certainly need borders
const cellStyle = { border: 'none' }

/**
 * A DatetimeGrid displays a grid of options in a Datetime component.
 */
const DatetimeGrid = props => {
  const { headers = [], columns, cells } = props
  const colSpan = Math.round(columns / headers.length)

  return (
    <Table fixed singleLine unstackable basic='very' attached='bottom' size='small' compact='very' textAlign='center'>
      <Table.Header>
        <Table.Row>
          {headers.map((header, i) => (
            <Table.HeaderCell key={i} colSpan={colSpan}>
              {header}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {_.chunk(columns, cells).map((row) => (
          <Table.Row key={_.map('content', row)}>
            {row.map(({ content, style = {}, ...rest }) => (
              <Table.Cell key={content} selectable style={{ ...cellStyle, ...style }} {...rest}>
                <a style={pointingStyle}>{content}</a>
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

DatetimeGrid.propTypes = {
  headers: PropTypes.arrayOf(PropTypes.string).isRequired,
  columns: PropTypes.number,
  cells: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
  })),
}

export default DatetimeGrid
