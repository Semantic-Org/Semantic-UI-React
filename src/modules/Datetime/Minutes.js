import _ from 'lodash/fp'
import React, { Component, PropTypes } from 'react'
import * as utils from '../../lib/dateUtils'

import {
  customPropTypes,
  META,
} from '../../lib'

import DateTimeGrid from './DateTimeGrid'

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

  /**
   * Return the ordered labels for days of the week,
   * accounting for the locale's first day of the week
   */
  getMinuteLabels() {
    const { timeFormatter, interval, hour } = this.props
    const count = parseInt(60 / interval, 10)
    const date = new Date()
    date.setHours(hour)

    return _.times(minute => {
      date.setMinutes(minute * interval)
      return timeFormatter(date)
    }, count)
  }

  getMinutes() {
    const { onClick, interval } = this.props
    const labels = this.getMinuteLabels()
    return _.times(i => {
      const thisMinute = i * interval
      return {
        content: labels[i],
        onClick: e => onClick(e, thisMinute),
      }
    }, 12)
  }

  render() {
    return (
      <DateTimeGrid
        headers={['Minute']}
        columns={4}
        cells={this.getMinutes()}
      />
    )
  }
}
