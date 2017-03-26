import React, { Component, PropTypes } from 'react'
import * as utils from '../../lib/dateUtils'

import {
  customPropTypes,
  META,
} from '../../lib'

import Table from '../../collections/Table/Table'

/**
 * A day cell within a calendar month
 */
export default class Years extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Current year **/
    year: PropTypes.number,

    /** Primary content. */
    children: PropTypes.node,

    onClick: PropTypes.func,
  }

  static _meta = {
    name: 'Years',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  constructor() {
    super()
    this.state = {
      hovering: null,
    }
  }

  getYears() {
    const { onClick } = this.props
    const row = [...Array(4).keys()]
    const col = [...Array(4).keys()]
    const cells = []
    const startYear = this.props.year - 8
    let i = startYear
    const children = []
    row.forEach((yearRow, rowIndex) => {
      col.forEach(() => {
        let thisYear = i
        children.push((
          <utils.ItemCell
            key={thisYear}
            value={thisYear}
            name={thisYear}
            onClick={(e) => {
              onClick(e, thisYear)
            }}
          />
        ))
        i += 1
      })
      cells.push(<utils.RowWrapper children={children} key={rowIndex} />)
    })
    return cells
  }

  render() {
    return (
      <Table fixed unstackable attached='bottom' size='small' compact='very' className='center aligned'>
        <Table.Header />
        <Table.Body>
          {this.getYears()}
        </Table.Body>
      </Table>
    )
  }
}
