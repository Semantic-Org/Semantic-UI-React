import React, { PropTypes } from 'react'
import cx from 'classnames'
import DayCell from './DayCell'
import CalendarHeader from './CalendarHeader'
import Month from './Month'
import Months from './Months'
import Years from './Years'
import Hours from './Hours'
import Minutes from './Minutes'
import Time from './Time'
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

    /** Month **/
    date: PropTypes.any,

    /** Initial value of date. **/
    defaultDate: PropTypes.any,

    /** Current Month Mode (DAY, MONTH or YEAR selection) **/
    mode: PropTypes.string,
    /**
     * Allows time selection. This will cause the component to offer a
     * time selection as well as the calendar date.
     * @type {bool}
     */
    time: PropTypes.bool,
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
    timeFormatter: PropTypes.func
  }

  static defaultProps = {
      firstDayOfWeek: 1
  }

  static autoControlledProps = [
    'date',
    'mode'
  ]

  constructor() {
    super()
    this.state = {
        date: new Date(),
        hovering: null,
        mode: 'DAY'
    }
  }

  /**
   * Return the current month
   */
  getMonth() {
    return this.state.date.getMonth()
  }

  /**
   * Return the current day of the week
   */
  getDayOfWeek() {
    return this.state.date.getDay()
  }

  /**
   * Return the current year
   */
  getYear() {
    return this.state.date.getFullYear()
  }

  getHour() {
    return this.state.date.getHours()
  }

  /**
   * Return the current month's name as provided in the content prop
   */
  getMonthName() {
      const {content} = this.props
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
    let {value, page} = props
    const nextMode = 'DAY'
    const date = new Date(this.state.date)
    if (!value && page) {
      value = date.getMonth() + page
    }
    date.setMonth(value)
    this.trySetState({
      date: date,
      mode: nextMode
    })
  }

  /**
   * Sets the current year and progresses to the next calendar mode
   * @type {String}
   */
  setYear(e, year, nextMode='DAY') {
    e.stopPropagation()
    const date = new Date(this.state.date)
    date.setYear(year)
    this.trySetState({
      date: date,
      mode: nextMode
    })
  }

  setHour(e, hour, nextMode='MINUTE') {
    e.stopPropagation()
    const date = new Date(this.state.date)
    date.setHours(hour)
    this.trySetState({
      date: date,
      mode: nextMode
    })
  }

  setMinute(e, minute) {
    e.stopPropagation()
    const { onDateSelect, time } = this.props
    const date = new Date(this.state.date)
    date.setMinutes(minute)
    this.trySetState({
      date: date
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
  setDay(e, day) {
    e.stopPropagation()
    const date = new Date(this.state.date);
    date.setDate(day)
    const { onDateSelect, time } = this.props
    const nextMode = time ? 'HOUR' : this.state.mode
    this.trySetState({
      date: date,
      mode: nextMode
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
    const {mode} = this.state
    if (mode == 'DAY') {
      this.setMonth(e, {page: direction})
    } else if (mode == 'MONTH') {
      this.setYear(e, this.getYear() + direction, mode)
    } else if (mode == 'YEAR') {
      this.setYear(e, this.getYear() + (direction*16), mode)
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
    this.trySetState({
      mode: mode
    })
  }



  /**
   * Returns the calendar body content
   */
  getBodyContent() {
    const {mode, date} = this.state
    if (mode == 'DAY') {
      return (
        <Month
          firstDayOfWeek={this.props.firstDayOfWeek}
          content={this.props.content}
          onClick={this.setDay.bind(this)}
          date={date}/>
      )
    } else if (mode == 'MONTH') {
      return (
        <Months
          content={this.props.content}
          onClick={this.setMonth.bind(this)}/>
      )
    } else if (mode == 'YEAR') {
      return (
        <Years
          year={this.getYear()}
          onClick={this.setYear.bind(this)}/>
      )
    } else if (mode == 'HOUR') {
      return (
        <Hours
          onClick={this.setHour.bind(this)}/>
      )
    } else if (mode == 'MINUTE') {
      return (
        <Minutes
          onClick={this.setMinute.bind(this)}
          hour={this.getHour()}/>
      )
    }
    return false
  }

  render() {
    const {mode, date} = this.state
    return (
      <div className="ui one column compact grid" style={{width:300}}>
          <div className="column" style={{height:39}}>
            <CalendarHeader
              date={date}
              monthName={this.getMonthName()}
              year={this.getYear()}
              mode={mode}
              onPrevious={this.page.bind(this, -1)}
              onNext={this.page.bind(this, 1)}
              onChangeMode={this.changeMode}/>
          </div>
          <div className="column">
            {this.getBodyContent()}
          </div>
      </div>

    )
  }
}
