import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import DatetimeDays from './DatetimeDays'
import DatetimeMonths from './DatetimeMonths'
import DatetimeYears from './DatetimeYears'
import DatetimeHours from './DatetimeHours'
import DatetimeMinutes from './DatetimeMinutes'

import {
  customPropTypes,
  dateUtils,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

const style = {
  float: 'left',    // for side-by-side calendar ranges
  width: '20em',
}

/**
 * A DatetimeCalendar is used to display and select both dates and times.
 *
 * @see Datetime
 */
export default class DatetimeCalendar extends Component {
  static _meta = {
    name: 'DatetimeCalendar',
    parent: 'Datetime',
    type: META.TYPES.ADDON,
  }

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Enables date selection. */
    date: PropTypes.bool,

    /**
     * Formats the date string in the input and calendar.
     * A function that receives a date argument and returns a formatted date
     * @param {date} - A date object.
     */
    dateFormatter: PropTypes.func,

    /** An array of dates that should be marked disabled in the calendar. */
    disabledDates: PropTypes.arrayOf(customPropTypes.date),

    /** First day of the week (Sunday = 0, Monday = 1). */
    firstDayOfWeek: PropTypes.number,

    /**
     * Formats an hour for display in the hour selection.
     * A function that receives a date argument and returns a formatted
     * rounded hour.
     */
    hourFormatter: PropTypes.func,

    /** The unit of time to operate on. */
    mode: PropTypes.oneOf(['minute', 'hour', 'day', 'month', 'year']).isRequired,

    /**
     * Called when the user changes the value.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed value.
     * @param {object} data.value - The proposed new value.
     */
    onDateChange: PropTypes.func,

    /** Display future or past months or years. */
    page: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]),

    /** Dates until or at selectionEnd are marked as selected. */
    selectionEnd: customPropTypes.date,

    /** Dates at or after selectionStart are marked as selected. */
    selectionStart: customPropTypes.date,

    /** Enables time selection. */
    time: PropTypes.bool,

    /**
     * Formats the time string in the input and calendar.
     * The function receives a date arguments and should return a string
     * formatted time.
     * @param {date} - A date object.
     */
    timeFormatter: PropTypes.func,

    /** Current value as a Date object or a string that can be parsed into one. */
    value: customPropTypes.date.isRequired,
  }

  static defaultProps = {
    firstDayOfWeek: 1,
    date: true,
    time: false,
    mode: 'day',
    value: new Date(),
    dateFormatter: dateUtils.defaultDateFormatter,
    timeFormatter: dateUtils.defaultTimeFormatter,
    hourFormatter: dateUtils.defaultHourFormatter,
  }

  handleChange = (e, { value, mode }) => {
    _.invokeArgs('onDateChange', [e, { ...this.props, value, mode }], this.props)
  }

  handleDayChange = (e, { value }) => {
    const { time } = this.props
    this.handleChange(e, { value, mode: time ? 'hour' : null })
  }

  handleMonthChange = (e, { value }) => {
    this.handleChange(e, { value, mode: 'day' })
  }

  handleYearChange = (e, { value }) => {
    this.handleChange(e, { value, mode: 'month' })
  }

  handleHourChange = (e, { value }) => {
    this.handleChange(e, { value, mode: 'minute' })
  }

  handleMinuteChange = (e, { value }) => {
    this.handleChange(e, { value, mode: null })
  }

  renderBody() {
    const {
      firstDayOfWeek,
      timeFormatter,
      hourFormatter,
      disabledDates,
      mode,
      value,
      selectionStart,
      selectionEnd,
    } = this.props

    if (mode === 'day') {
      return (
        <DatetimeDays
          firstDayOfWeek={firstDayOfWeek}
          onDateChange={this.handleDayChange}
          value={value}
          selectionStart={selectionStart}
          selectionEnd={selectionEnd}
          disabledDates={disabledDates}
        />
      )
    }

    if (mode === 'month') {
      return <DatetimeMonths onDateChange={this.handleMonthChange} value={value} />
    }

    if (mode === 'year') {
      return <DatetimeYears onDateChange={this.handleYearChange} value={value} />
    }

    if (mode === 'hour') {
      return <DatetimeHours onDateChange={this.handleHourChange} formatter={hourFormatter} value={value} />
    }

    if (mode === 'minute') {
      return <DatetimeMinutes onDateChange={this.handleMinuteChange} formatter={timeFormatter} value={value} />
    }
  }

  render() {
    const rest = getUnhandledProps(DatetimeCalendar, this.props)
    const ElementType = getElementType(DatetimeCalendar, this.props)

    return (
      <ElementType {...rest} style={style}>
        {this.renderBody()}
      </ElementType>
    )
  }
}
