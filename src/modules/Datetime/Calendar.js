import React, { PropTypes } from 'react'
import cx from 'classnames'
import DayCell from './DayCell'
import CalendarHeader from './CalendarHeader'
import Month from './Month'
import Months from './Months'
import Years from './Years'
import Hours from './Hours'
import Minutes from './Minutes'
import DropDown from '../Dropdown/Dropdown'
import Button from '../../elements/Button'
import * as utils from '../../lib/dateUtils'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

/**
 * A <Datetime/> allows a user to select a calendar date and/or time as well
 * as handle date ranges.
 * @see Form
 */
export default class Calendar extends Component {
  static _meta = {
    name: 'Calendar',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Textual context constants **/
    content: PropTypes.object,

    /** Current date **/
    value: PropTypes.any,

    /** Initial value of date. **/
    defaultValue: PropTypes.any,

    /** Current Month Mode (DAY, MONTH or YEAR selection) **/
    mode: PropTypes.string,
    /**
     * Allows time selection. This will cause the component to offer a
     * time selection as well as the calendar date.
     * @type {bool}
     */
    time: PropTypes.bool,
    /**
     * Allows date selection. This will cause the component to offer a
     * date selection as well as the time.
     * @type {bool}
     */
    date: PropTypes.bool,
    /** default mode (DAY) **/
    defaultMode: PropTypes.string,
    /**
     * First Day of the Week.
     * Sunday = 0
     * Monday = 1
     */
    firstDayOfWeek: PropTypes.number,
    /**
     * Handler fired when a date is selected
     * @type {[type]}
     */
    onDateSelect: PropTypes.func,
    /**
     * Handler fired when a month is changed
     * @type {[type]}
     */
    onChangeMonth: PropTypes.func,
    /**
     * Handler fired when a year is changed
     * @type {[type]}
     */
    onChangeYear: PropTypes.func,
    /**
     * A function that will return a Date object as a formatted string in the
     * current locale. By default the Date will formatted as YYYY-MM-DD
     * @type {function}
     */
    dateFormatter: PropTypes.func,
    /**
     * A function that will return the time image of a Date object as a formatted
     * string in the current locale. By default the time will be formatted as HH:MM
     * @type {function}
     */
    timeFormatter: PropTypes.func,
    /**
     * do not allow dates before minDate
     * @type {Date}
     */
    minDate: customPropTypes.DateValue,
    /**
     * Do not allow dates after maxDate
     * @type {Date}
     */
    maxDate: customPropTypes.DateValue,
    /**
     * An array of dates that should be marked disabled in the calendar
     * @type {Array<Date>}
     */
    disabledDates: PropTypes.arrayOf(customPropTypes.DateValue),
    /**
     * Dates at or after selectionStart are marked as selected
     * @type {Date}
     */
    selectionStart: customPropTypes.DateValue,
    defaultSelectionStart: customPropTypes.DateValue,
    /**
     * Dates until or at selectionEnd are marked as selected
     * @type {[type]}
     */
    selectionEnd: customPropTypes.DateValue,
    defaultSelectionEnd: customPropTypes.DateValue,
    range: PropTypes.bool
  }

  static defaultProps = {
    firstDayOfWeek: 1,
    date: true,
    time: true,
    range: false
  }

  static autoControlledProps = [
    'value',
    'mode',
    'selectionStart',
    'selectionEnd'
  ]

  constructor(props) {
    super(props)
    this.state = {
      value: new Date(),
      hovering: null,
      mode: this.getInitialMode(props)
    }
  }

  getInitialMode(props) {
    const {date, time} = props
    if (!date && time) {
      return 'HOUR'
    } else {
      return 'DAY'
    }
  }

  /**
   * Return the current month
   */
  getMonth() {
    return this.state.value.getMonth()
  }

  /**
   * Return the current day of the week
   */
  getDayOfWeek() {
    return this.state.value.getDay()
  }

  /**
   * Return the current year
   */
  getYear() {
    return this.state.value.getFullYear()
  }

  getHour() {
    return this.state.value.getHours()
  }

  /**
   * Return the current month's name as provided in the content prop
   */
  getMonthName() {
    const { content } = this.props
    return content.months[this.getMonth()]
  }

  /**
   * Set the current month
   *  @param  {Object} object containing one of:
   *  'value' key with the selected month number,
   *  'page' key with value of either 1 or -1 to page to the next/prev month
   */
  setMonth = (e, props) => {
    e.stopPropagation()
    let { value, page } = props
    const nextMode = 'DAY'
    const date = new Date(this.state.value)
    if (!value && page) {
      value = date.getMonth() + page
    }
    date.setMonth(value)
    this.trySetState({
      value: date,
      mode: nextMode
    })
    if (this.props.onChangeMonth) {
      this.props.onChangeMonth(date)
    }
  }

  /**
   * Sets the current year and progresses to the next calendar mode
   * @type {String}
   */
  setYear = (e, year, nextMode = 'DAY') => {
    e.stopPropagation()
    const date = new Date(this.state.value)
    date.setYear(year)
    this.trySetState({
      value: date,
      mode: nextMode
    })
  }

  setHour = (e, hour, nextMode = 'MINUTE') => {
    e.stopPropagation()
    const date = new Date(this.state.value)
    date.setHours(hour)
    this.trySetState({
      value: date,
      mode: nextMode
    })
  }

  setMinute = (e, minute) => {
    e.stopPropagation()
    const { onDateSelect, time } = this.props
    const date = new Date(this.state.value)
    date.setMinutes(minute)
    const extraState = {}
    if (this.props.range) {
      extraState.mode = 'DAY'
    }
    this.trySetState({
      value: date,
      ...extraState
    })
    if (onDateSelect) {
      onDateSelect(new Date(date), e)
    }
  }

  /**
   * Sets the day to the current date
   * @param  {number} Selected day
   * @param  {event} e
   */
  setDay = (e, day) => {
    e.stopPropagation()
    const date = new Date(this.state.value);
    date.setDate(day)
    const { onDateSelect, time } = this.props
    const nextMode = time ? 'HOUR' : this.state.mode
    const rangeState = {}
	  if (this.props.range) {
      rangeState.selectionStart = date
    }
    this.trySetState({
      value: date,
      mode: nextMode,
      ...rangeState
    })
    if (!time && onDateSelect) {
      onDateSelect(new Date(date), e)
    }
  }

  /**
   * Event handler called when paginating month, years or year groups
   * @param  {number} direction Either 1 or -1 to indicate the next/prev item
   * @param  {event} e
   */
  page = (direction, e) => {
    e.stopPropagation()
    const { mode } = this.state
    switch (mode) {
      case 'DAY':
        this.setMonth(e, { page: direction })
        break

      case 'MONTH':
        this.setYear(e, this.getYear() + direction, mode)
        break

      case 'YEAR':
        this.setYear(e, this.getYear() + (direction * 16), mode)
        break
    }
  }

  /**
   * Change the calendar mode from DAY to MONTH or YEAR selection
   * @param  {string} mode One of DAY, MONTH or YEAR
   * @param  {[type]} e    [description]
   * @return {[type]}      [description]
   */
  changeMode = (mode, e) => {
    e.stopPropagation()
    this.trySetState({ mode })
  }

  /**
   * Returns the calendar body content
   */
  getBodyContent() {
    const { content, firstDayOfWeek } = this.props
    const { mode, value, selectionStart, selectionEnd } = this.state
    switch (mode) {
      case 'DAY':
        return (<Month
                  firstDayOfWeek={firstDayOfWeek}
                  content={content}
                  onClick={this.setDay}
                  date={value}
                  selectionStart={selectionStart}
                  selectionEnd={selectionEnd} />)

      case 'MONTH':
        return <Months content={content} onClick={this.setMonth}/>

      case 'YEAR':
        return <Years year={this.getYear()} onClick={this.setYear} />

      case 'HOUR':
        return <Hours onClick={this.setHour} />

      case 'MINUTE':
        return <Minutes onClick={this.setMinute} hour={this.getHour()} />
      default:
        return null
    }
  }

  render() {
    const { date } = this.props
    const { mode, value } = this.state
    return (
      <div style={{ width: 300 }}>
        {date ?
          <CalendarHeader
            date={value}
            monthName={this.getMonthName()}
            year={this.getYear()}
            mode={mode}
            onPrevious={this.page.bind(this, -1)}
            onNext={this.page.bind(this, 1)}
            onChangeMode={this.changeMode}
          /> : false }
        {this.getBodyContent()}
      </div>

    )
  }
}
