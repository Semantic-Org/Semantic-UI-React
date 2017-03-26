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
export default class Minutes extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,
    /** Current hour */
    hour: PropTypes.number,
    /** Minutes interval between each item. */
    interval: PropTypes.number,
    /** Click handler */
    onClick: PropTypes.func,
    /**
     * A function that will return the time image of a Date object as a formatted
     * string in the current locale. By default the time will be formatted as HH:MM
     * @type {function}
     */
    timeFormatter: PropTypes.func,
  }

  static _meta = {
    name: 'Minutes',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  static defaultProps = {
    timeFormatter: utils.defaultTimeFormatter,
    interval: 5,
  }

  constructor() {
    super()
    this.state = {
      hovering: null,
    }
  }

  /**
   * Return the ordered labels for days of the week,
   * accounting for the locale's first day of the week
   */
  getMinuteLabels() {
    const { timeFormatter, interval, hour } = this.props
    const count = parseInt(60 / interval, 10)
    const date = new Date()
    date.setHours(hour)
    return [...Array(count).keys()].map((minute) => {
      date.setMinutes(minute * interval)
      return timeFormatter(date)
    })
  }

  getMinutes() {
    const { onClick, interval } = this.props
    const labels = this.getMinuteLabels()
    const rows = [...Array(3).keys()]
    const cols = [...Array(4).keys()]
    const cells = []
    let i = 0
    rows.forEach((row) => {
      const children = []
      cols.forEach((col) => {
        const thisMinute = i * interval
        children.push((
          <utils.ItemCell
            key={i}
            name={labels[i]}
            value={labels[i]}
            onClick={(e) => {
              onClick(e, thisMinute)
            }}
          />
        ))
        i += 1
      })
      cells.push(<utils.RowWrapper children={children} key={row} />)
    })
    return cells
  }

  render() {
    return (
      <Table fixed unstackable attached='bottom' size='small' compact='very' className='center aligned'>
        <Table.Header>
          <Table.HeaderCell colSpan='4'>Minute</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          {this.getMinutes()}
        </Table.Body>
      </Table>
    )
  }
}
