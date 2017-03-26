import _ from 'lodash/fp'
import React, { PropTypes } from 'react'

import Table from '../../collections/Table'

const pointingStyle = { cursor: 'pointer' }

/**
 * A DateTimeGrid displays a grid of options in a DateTime component.
 */
const DateTimeGrid = props => {
  const { headers, columns, cells } = props
  const colSpan = Math.round(columns / headers.length)

  return (
    <div>
      <Table unstackable fixed celled attached='bottom' size='small' compact='very' textAlign='center'>
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
              {row.map(({ content, active, ...rest }) => (
                <Table.Cell selectable key={content} {...rest}>
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
