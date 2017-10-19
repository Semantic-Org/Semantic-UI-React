import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React from 'react'

import Table from '../../collections/Table'
import {
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

const pointingStyle = { cursor: 'pointer' }
// TODO if we allow configuring the table, we should not override the border style
// example, a `celled` table would certainly need borders
const cellStyle = {
  border: 'none',
}

/**
 * A DatetimeGrid displays a grid of options in a Datetime component.
 */
const DatetimeGrid = (props) => {
  const { headers = [], columns, cells, ...rest } = props
  const colSpan = Math.round(columns / headers.length)

  return (
    <Table {...rest}>
      <Table.Header>
        <Table.Row>
          {headers.map((header, i) => (
            // eslint-disable-next-line react/no-array-index-key
            <Table.HeaderCell key={i} colSpan={colSpan}>
              {header}
            </Table.HeaderCell>
          ))}
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {_.chunk(columns, cells).map(row => (
          <Table.Row key={_.map('content', row)}>
            {row.map(({ content, style = {}, ...restRow }) => (
              <Table.Cell key={content} selectable style={{ ...cellStyle, ...style }} {...restRow}>
                <a style={pointingStyle}>{content}</a>
              </Table.Cell>
            ))}
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  )
}

DatetimeGrid._meta = {
  name: 'DatetimeGrid',
  parent: 'Datetime',
  type: META.TYPES.MODULE,
}

DatetimeGrid.propTypes = {
  /** An element type to render as (string or function). */
  as: customPropTypes.as,

  /** Table header cells. */
  headers: PropTypes.arrayOf(PropTypes.string),

  /** The number of columns wide the table should be. Cells are wrapped to fit. */
  columns: PropTypes.number.isRequired,

  /** Shorthand table cells, wrapped to the number of columns. */
  cells: PropTypes.arrayOf(PropTypes.shape({
    content: PropTypes.string.isRequired,
  })).isRequired,
}

DatetimeGrid.defaultProps = {
  as: Table,
  basic: 'very',
  fixed: true,
  singleLine: true,
  unstackable: true,
  size: 'small',
  textAlign: 'center',
}

export default DatetimeGrid
