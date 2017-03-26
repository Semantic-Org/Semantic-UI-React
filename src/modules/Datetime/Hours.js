import _ from 'lodash/fp'
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
export default class Hours extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,

    onClick: PropTypes.func,
    /**
     * A function that will return the time image of a Date object as a formatted
     * string in the current locale. By default the time will be formatted as HH:MM
     * @type {function}
     */
    timeFormatter: PropTypes.func,
  }

  static _meta = {
    name: 'Hours',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  static defaultProps = {
    timeFormatter: utils.defaultTimeFormatter,
    firstHourOfDay: 0,
    LastHourOfDay: 23,
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
  getHourLabels() {
    const { timeFormatter } = this.props
    const date = new Date()
    return _.times(hour => {
      date.setHours(hour)
      date.setMinutes(0)
      return timeFormatter(date)
    }, 24)
  }

  getHours() {
    const { onClick } = this.props
    // const { firstHourOfDay, LastHourOfDay } = this.props
    const labels = this.getHourLabels()
    // const hours = labels.slice(firstHourOfDay, LastHourOfDay)
    const rows = _.range(0, 6)
    const cols = _.range(0, 4)
    const cells = []
    let i = 0
    rows.forEach((row) => {
      const children = []
      cols.forEach((col) => {
        const thisHour = i
        children.push((
          <utils.ItemCell
            key={i}
            name={labels[i]}
            value={labels[i]}
            onClick={(e) => {
              onClick(e, thisHour)
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
          <Table.HeaderCell colSpan='4'>Hour</Table.HeaderCell>
        </Table.Header>
        <Table.Body>
          {this.getHours()}
        </Table.Body>
      </Table>
    )
  }
}
