import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  customPropTypes,
  dateUtils,
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

    /**
     * Formats a Date object as a minute string.
     *
     * @param {date} - A date object.
     * @returns {string} - A formatted minute string.
     */
    formatter: PropTypes.func,

    /**
     * Called when the user changes the value.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed value.
     * @param {object} data.value - The proposed new value.
     */
    onChange: PropTypes.func,

    /** Current value as a Date object. */
    value: customPropTypes.DateValue,
  }

  static _meta = {
    name: 'Minutes',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  static defaultProps = {
    formatter: dateUtils.defaultMinuteFormatter,
    interval: 5,
  }

  getCells() {
    const { interval } = this.props
    return _.times((i) => {
      const thisMinute = i * interval
      return {
        content: this.getMinuteLabel(thisMinute),
        onClick: this.handleCellClick(thisMinute),
      }
    }, Math.round(60 / interval))
  }

  getMinuteLabel(minute) {
    const { formatter, interval, hour, value } = this.props
    const date = new Date(value)

    date.setHours(hour)
    date.setMinutes(minute * interval)

    return formatter(date)
  }

  handleCellClick = minutes => (e) => {
    const value = new Date(this.props.value)
    value.setMinutes(minutes)

    _.invokeArgs('onChange', [e, { ...this.props, value }], this.props)
  }

  render() {
    return (
      <DatetimeGrid
        headers={['Minute']}
        columns={3}
        cells={this.getCells()}
      />
    )
  }
}
