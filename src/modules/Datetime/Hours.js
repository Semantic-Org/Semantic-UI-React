import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {defaultHourFormatter} from '../../lib/dateUtils'

import {
  META,
} from '../../lib'

import DatetimeGrid from './DatetimeGrid'

/**
 * A day cell within a calendar month
 */
export default class Hours extends Component {
  static propTypes = {
    /**
     * handles a click on an hour cell.
     * Fires the call back with 
     * @param: event
     * @param: {value}
     */
    onClick: PropTypes.func,

    /**
     * Formats the time string shown in the calendar selector.
     *
     * @param {date} - A date object.
     * @returns {string} - A formatted time string.
     */
    formatter: PropTypes.func,
  }

  static _meta = {
    name: 'Hours',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  static defaultProps = {
    formatter: defaultHourFormatter,
    firstHourOfDay: 0,
    LastHourOfDay: 23,
  }

  getHourLabels() {
    const { formatter } = this.props
    const date = new Date()
    date.setMinutes(0)

    return _.times(hour => {
      date.setHours(hour)
      return formatter(date)
    }, 24)
  }

  getCells() {
    const { onClick } = this.props
    const labels = this.getHourLabels()

    return _.times(i => {
      const thisHour = i
      return {
        content: labels[i],
        onClick: e => onClick(e, thisHour),
      }
    }, 24)
  }

  render() {
    return (
      <DatetimeGrid
        headers={['Hour']}
        columns={4}
        cells={this.getCells()}
      />
    )
  }
}
