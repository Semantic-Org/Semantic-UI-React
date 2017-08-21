import PropTypes from 'prop-types'
import React, { Component } from 'react'
import CalendarMenu from './CalendarMenu'
import Month from './Month'
import Months from './Months'
import Years from './Years'
import Hours from './Hours'
import Minutes from './Minutes'

import { 
  customPropTypes,
  dateUtils,
  META,
} from '../../lib'

const style = {
  float: 'left',    // for side-by-side calendar ranges
  width: '20em',
}

/**
 * A <Calendar/> handles the construction, formatting and
 * orchestration of the various date and time components
 * @see Datetime
 */
export default class Calendar extends Component {
  static _meta = {
    name: 'Calendar',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  static propTypes = {
    /** Textual context constants. */
    content: PropTypes.object,

    /** Enables date selection. */
    date: PropTypes.bool,

    /** The initial value for selectionEnd. */
    defaultSelectionEnd: customPropTypes.DateValue,

    /** The initial value for selectionStart. */
    defaultSelectionStart: customPropTypes.DateValue,

    /** Initial value for value. */
    defaultValue: PropTypes.arrayOf(customPropTypes.DateValue),

    /** Initial value for mode. */
    defaultMode: PropTypes.arrayOf(customPropTypes.DateValue),

    /** An array of dates that should be marked disabled in the calendar. */
    disabledDates: PropTypes.arrayOf(customPropTypes.DateValue),

    /** First day of the week (Sunday = 0, Monday = 1). */
    firstDayOfWeek: PropTypes.number,

    /** Current calendar mode. */
    mode: PropTypes.oneOf(['minute', 'hour', 'day', 'month', 'year']),

    /** Handler fired when a date is selected. */
    onDateSelect: PropTypes.func,

    /** Handler fired when a month is changed. */
    onChangeMonth: PropTypes.func,

    /** Handler fired when a year is changed. */
    onChangeYear: PropTypes.func,

    // TODO what is this used for and what type is it?
    page: PropTypes.any,

    /** Render two calendars for selecting the start and end of a range. */
    range: PropTypes.bool,

    /** In a DateRange component, this is either 0 for the first calendar or 1 for the second */
    rangeId: PropTypes.oneOf([0, 1]),

    /** Dates until or at selectionEnd are marked as selected. */
    selectionEnd: customPropTypes.DateValue,

    /** Dates at or after selectionStart are marked as selected. */
    selectionStart: customPropTypes.DateValue,

    /** Enables time selection. */
    time: PropTypes.bool,
    
    /**
     * Formats the date string in the input and calendar.
     * A function that receives a date argument and returns a formatted date
     * @param {date} - A date object. 
     */
    dateFormatter: PropTypes.func,
    /**
     * Formats the time string in the input and calendar.
     * The function receives a date arguments and should return a string
     * formatted time.
     * @param {date} - A date object. 
     */
    timeFormatter: PropTypes.func,
    /**
     * Formats an hour for display in the hour selection.
     * A function that receives a date argument and returns a formatted
     * rounded hour.
     */
    hourFormatter: PropTypes.func,

    /** Current value as a Date object or a string that can be parsed into one. */
    value: customPropTypes.DateValue,
  }

  static defaultProps = {
    disabledDates: [],
    firstDayOfWeek: 1,
    date: true,
    time: true,
    range: false,
    mode: 'day',
    selectionStart: null,
    selectionEnd: null,
    value: new Date(),
    dateFormatter: dateUtils.defaultDateFormatter,  
    timeFormatter: dateUtils.defaultTimeFormatter,  
    hourFormatter: dateUtils.defaultHourFormatter
  }

  getYear = () => this.props.value.getFullYear()
  getMonth = () => this.props.value.getMonth()
  getHour = () => this.props.value.getHours()
  getDate = () => this.props.value.getDate()

  getMonthName() {
    const { content } = this.props
    return content.months[this.getMonth()]
  }

  setMonth = (e, props) => {
    e.stopPropagation()
    const { value, page } = props
    const { onDateSelect } = this.props
    const date = this.props.value;
    const nextMode = 'day'
    const month = !value && page
      ? date.getMonth() + page
      : value

    date.setMonth(month)
    onDateSelect(e, {
      ...this.props,
      value: date,
      nextMode: nextMode,
    }) 
  }

  setYear = (e, year, nextMode = 'day') => {
    e.stopPropagation()
    const { value, onDateSelect } = this.props
    value.setYear(year)
    onDateSelect(e, {
      ...this.props,
      value: value,
      nextMode: nextMode
    })
  }

  setHour = (e, hour, nextMode = 'minute') => {
    e.stopPropagation()
    const { value, onDateSelect } = this.props
    value.setHours(hour)
    onDateSelect(e, {
      ...this.props,
      value: value,
      nextMode: nextMode
    })
  }

  setMinute = (e, minute) => {
    e.stopPropagation()
    const { onDateSelect, value } = this.props
    value.setMinutes(minute)
    const nextMode = this.props.range ? ' day' : null
    onDateSelect(e, {
      ...this.props,
      value: value,
      nextMode: nextMode
    })
  }

  setDay = (e, day) => {
    e.stopPropagation()
    const { onDateSelect, time, range, value } = this.props
    value.setDate(day)
    const nextMode = time ? 'hour' : null
    onDateSelect(e, {
      ...this.props,
      value: value,
      nextMode: nextMode,
      rangeStart: range ? date : null
    })
  }

  page = (direction) => (e) => {
    e.stopPropagation()
    const { mode } = this.props
    switch (mode) {
      case 'day':
        this.setMonth(e, { page: direction })
        break

      case 'month':
        this.setYear(e, this.getYear() + direction, mode)
        break

      case 'year':
        this.setYear(e, this.getYear() + (direction * 16), mode)
        break

      default:
        break
    }
  }

  /**
   * Change the calendar mode from day to month or year selection
   *
   * @param {string} mode - One of day, month or year
   * @param {SyntheticEvent} e
   */
  changeMode = (e, {name}) => {
    e.stopPropagation()
    const { value, onDateSelect } = this.props
    onDateSelect(e, {
      value: value, 
      nextMode: name
    })
  }

  /**
   * Returns the calendar body content
   */
  renderBody() {
    const {
      content,
      firstDayOfWeek,
      dateFormatter,
      timeFormatter,
      hourFormatter,
      disabledDates,
      mode,
      value,
      selectionStart,
      selectionEnd
    } = this.props

    switch (mode) {
      case 'day':
        return (
          <Month
            firstDayOfWeek={firstDayOfWeek}
            content={content}
            onClick={this.setDay}
            date={value}
            selectionStart={selectionStart}
            selectionEnd={selectionEnd}
            disabledDates={disabledDates}
          />
        )

      case 'month': 
        return <Months content={content} onClick={this.setMonth} />

      case 'year':
        return <Years year={this.getYear()} onClick={this.setYear} />

      case 'hour':
        return <Hours onClick={this.setHour} formatter={hourFormatter}/>

      case 'minute':
        return <Minutes onClick={this.setMinute} hour={this.getHour()} timeFormatter={timeFormatter}/>

      default:
        return null
    }
  }

  render() {
    const { date, mode } = this.props
    const calendarDay = this.getDate() 
    return (
      <div style={style}>
        {date && (
          <CalendarMenu
            value={calendarDay}
            monthName={this.getMonthName()}
            year={this.getYear()}
            mode={mode}
            onPrevious={this.page(-1)}
            onNext={this.page(1)}
            onChangeMode={this.changeMode}
          />
        )}
        {this.renderBody()}
      </div>
    )
  }
}
