import React, { PropTypes } from 'react'
import CalendarMenu from './CalendarMenu'
import Month from './Month'
import Months from './Months'
import Years from './Years'
import Hours from './Hours'
import Minutes from './Minutes'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  META,
} from '../../lib'

const style = {
  float: 'left',    // for side-by-side calendar ranges
  width: '20em',
}

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

    /** Enables time selection. */
    time: PropTypes.bool,

    /** Dates until or at selectionEnd are marked as selected. */
    selectionEnd: customPropTypes.DateValue,

    /** Dates at or after selectionStart are marked as selected. */
    selectionStart: customPropTypes.DateValue,

    /** Current value as a Date object or a string that can be parsed into one. */
    value: customPropTypes.DateValue,
  }

  static defaultProps = {
    disabledDates: [],
    firstDayOfWeek: 1,
    date: true,
    time: true,
    range: false,
  }

  static autoControlledProps = [
    'value',
    'mode',
    'selectionStart',
    'selectionEnd',
  ]

  constructor(props) {
    super(props)
    this.state = {
      value: new Date(),
      mode: this.getInitialMode(props),
    }
  }

  getInitialMode(props) {
    const { date, time } = props
    return !date && time ? 'hour' : 'day'
  }

  getYear = () => this.state.value.getFullYear()
  getMonth = () => this.state.value.getMonth()
  getHour = () => this.state.value.getHours()

  getMonthName() {
    const { content } = this.props
    return content.months[this.getMonth()]
  }

  setMonth = (e, props) => {
    e.stopPropagation()
    const { value, page } = props
    const nextMode = 'day'
    const date = new Date(this.state.value)
    const month = !value && page
      ? date.getMonth() + page
      : value

    date.setMonth(month)
    this.trySetState({
      value: date,
      mode: nextMode,
    })
    if (this.props.onChangeMonth) {
      this.props.onChangeMonth(date)
    }
  }

  setYear = (e, year, nextMode = 'day') => {
    e.stopPropagation()
    const date = new Date(this.state.value)
    date.setYear(year)
    this.trySetState({
      value: date,
      mode: nextMode,
    })
  }

  setHour = (e, hour, nextMode = 'minute') => {
    e.stopPropagation()
    const date = new Date(this.state.value)
    date.setHours(hour)
    this.trySetState({
      value: date,
      mode: nextMode,
    })
  }

  setMinute = (e, minute) => {
    e.stopPropagation()
    const { onDateSelect } = this.props
    const date = new Date(this.state.value)
    date.setMinutes(minute)
    const extraState = {}
    if (this.props.range) {
      extraState.mode = 'day'
    }
    this.trySetState({
      value: date,
      ...extraState,
    })
    if (onDateSelect) {
      onDateSelect(new Date(date), e)
    }
  }

  setDay = (e, day) => {
    e.stopPropagation()
    const date = new Date(this.state.value)
    date.setDate(day)
    const { onDateSelect, time } = this.props
    const nextMode = time ? 'hour' : this.state.mode
    const rangeState = {}
    if (this.props.range) {
      rangeState.selectionStart = date
    }
    this.trySetState({
      value: date,
      mode: nextMode,
      ...rangeState,
    })
    if (!time && onDateSelect) {
      onDateSelect(new Date(date), e)
    }
  }

  page = (direction, e) => {
    e.stopPropagation()
    const { mode } = this.state
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
   * @param  {string} mode One of day, month or year
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
    const { content, firstDayOfWeek, disabledDates } = this.props
    const { mode, value, selectionStart, selectionEnd } = this.state
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
        return <Hours onClick={this.setHour} />

      case 'minute':
        return <Minutes onClick={this.setMinute} hour={this.getHour()} />

      default:
        return null
    }
  }

  render() {
    const { date } = this.props
    const { mode, value } = this.state
    return (
      <div style={style}>
        {date && (
          <CalendarMenu
            date={value}
            monthName={this.getMonthName()}
            year={this.getYear()}
            mode={mode}
            onPrevious={this.page.bind(this, -1)}
            onNext={this.page.bind(this, 1)}
            onChangeMode={this.changeMode}
          />
        )}
        {this.getBodyContent()}
      </div>

    )
  }
}
