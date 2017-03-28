import _ from 'lodash/fp'
import React, { Component, PropTypes } from 'react'
import * as utils from '../../lib/dateUtils'

import {
  META,
} from '../../lib'

import DateTimeGrid from './DateTimeGrid'

/**
 * A day cell within a calendar month
 */
export default class Hours extends Component {
  static propTypes = {
    // TODO document
    onClick: PropTypes.func,

    /**
     * A function that will return the time image of a Date object as a formatted
     * string in the current locale. By default the time will be formatted as HH:MM
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

  getHourLabels() {
    const { timeFormatter } = this.props
    const date = new Date()
    date.setMinutes(0)

    return _.times(hour => {
      date.setHours(hour)
      return timeFormatter(date)
    }, 24)
  }

  getHours() {
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
      <DateTimeGrid
        headers={['Hour']}
        columns={4}
        cells={this.getHours()}
      />
    )
  }
}
