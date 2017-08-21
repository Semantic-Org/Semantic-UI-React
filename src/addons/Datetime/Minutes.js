import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import {defaultTimeFormatter} from '../../lib/dateUtils'

import {
  META,
} from '../../lib'

import DatetimeGrid from './DatetimeGrid'

/**
 * A day cell within a calendar month
 */
export default class Minutes extends Component {
  static propTypes = {
    /** Current hour. */
    hour: PropTypes.number,

    /** Minutes interval between each item. */
    interval: PropTypes.number,

    // TODO better doc
    /** Click handler. */
    onClick: PropTypes.func,

    /**
     * Formats the time string in the input and calendar.
     *
     * @param {date} - A date object.
     * @returns {string} - A formatted time string.
     */
    timeFormatter: PropTypes.func,
  }

  static _meta = {
    name: 'Minutes',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  static defaultProps = {
    timeFormatter: defaultTimeFormatter,
    interval: 5,
  }

  /**
   * Return the ordered labels for days of the week,
   * accounting for the locale's first day of the week
   */
  getMinuteLabels() {
    const { timeFormatter, interval, hour } = this.props
    const count = Math.round(60 / interval)
    const date = new Date()
    date.setHours(hour)

    return _.times(minute => {
      date.setMinutes(minute * interval)
      return timeFormatter(date)
    }, count)
  }

  getCells() {
    const { onClick, interval } = this.props
    const labels = this.getMinuteLabels()
    return _.times(i => {
      const thisMinute = i * interval
      return {
        content: labels[i],
        onClick: e => onClick(e, thisMinute),
      }
    }, labels.length)
  }

  render() {
    return (
      <DatetimeGrid
        headers={['Minute']}
        columns={4}
        cells={this.getCells()}
      />
    )
  }
}
