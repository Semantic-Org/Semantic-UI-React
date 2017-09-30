import cx from 'classnames'
import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React from 'react'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  dateUtils,
  getElementType,
  getUnhandledProps,
  makeDebugger,
  META,
} from '../../lib'

import Input from '../../elements/Input/Input'
import Popup from '../../modules/Popup'

import DatetimeGrid from './DatetimeGrid'
import DatetimeMenu from './DatetimeMenu'
import DatetimeCalendar from './DatetimeCalendar'
import DatetimeYears from './DatetimeYears'
import DatetimeMonths from './DatetimeMonths'
import DatetimeDays from './DatetimeDays'
import DatetimeHours from './DatetimeHours'
import DatetimeMinutes from './DatetimeMinutes'

const debug = makeDebugger('datetime')

// Allow the table and menu to create the borders
const popupStyle = {
  border: 'none',
  padding: 0,
}

/**
 * Datetime allows a user to select a calendar date and/or time.
 * @see Form
 * @see Popup
 * @see Table
 */
export default class Datetime extends Component {
  static _meta = {
    name: 'Datetime',
    type: META.TYPES.ADDON,
  }

  static Grid = DatetimeGrid
  static Menu = DatetimeMenu
  static Calendar = DatetimeCalendar
  static Years = DatetimeYears
  static Months = DatetimeMonths
  static Days = DatetimeDays
  static Hours = DatetimeHours
  static Minutes = DatetimeMinutes

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Enables date selection. */
    date: PropTypes.bool,

    /** Disables the input element. */
    disabled: PropTypes.bool,

    /** An array of dates that should be marked disabled in the calendar. */
    disabledDates: PropTypes.arrayOf(customPropTypes.date),

    /** The initial mode value. */
    defaultMode: PropTypes.string,

    /** Initial value of open. */
    defaultOpen: PropTypes.bool,

    /** Initial value as a Date object or a string that can be parsed into one. */
    defaultValue: customPropTypes.date,

    /**
     * Formats the date string in the input and calendar.
     * A function that receives a date argument and returns a formatted date
     * @param {date} - A date object.
     */
    dateFormatter: PropTypes.func,

    /** A Datetime input can alert a user to a problem. */
    error: PropTypes.bool,

    /** First day of the week. Can be either 0 (Sunday), 1 (Monday) * */
    firstDayOfWeek: PropTypes.number,

    /**
     * Formats an hour for display in the hour selection.
     * A function that receives a date argument and returns a formatted
     * rounded hour.
     */
    hourFormatter: PropTypes.func,

    /** Shorthand for Icon. */
    icon: customPropTypes.itemShorthand,

    /** Do not allow dates after maxDate. */
    maxDate: customPropTypes.date,

    /** Do not allow dates before minDate. */
    minDate: customPropTypes.date,

    /** The time unit to display in the calendar. */
    mode: PropTypes.oneOf(['minute', 'hour', 'day', 'month', 'year']),

    /** Name of the input field which holds the date value. */
    name: PropTypes.string,

    /**
     * Called when the user changes the value.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed value.
     */
    onChange: PropTypes.func,

    /**
     * Called when a close event happens.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClose: PropTypes.func,

    /**
     * Called when an open event happens.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onOpen: PropTypes.func,

    /** Controls whether or not the dropdown menu is displayed. */
    open: PropTypes.bool,

    /** Placeholder text. */
    placeholder: PropTypes.string,

    /** Render two calendars for selecting the start and end of a range. */
    range: PropTypes.bool,

    /** Enables time selection. */
    time: PropTypes.bool,

    /**
     * Formats the time string in the input and calendar.
     * The function receives a date arguments and should return a string formatted time.
     *
     * @param {date} - A date object.
     */
    timeFormatter: PropTypes.func,

    /** Current value as a Date object or a string that can be parsed into one. */
    value: customPropTypes.date,
  }

  static autoControlledProps = [
    'open',
    'value',
    'mode',
  ]

  static defaultProps = {
    icon: 'calendar',
    dateFormatter: dateUtils.defaultDateFormatter,
    timeFormatter: dateUtils.defaultTimeFormatter,
    hourFormatter: dateUtils.defaultHourFormatter,
    date: true,
    time: true,
  }

  state = {
    value: new Date(),
  }

  componentWillMount() {
    this.trySetState({ mode: this.getInitialMode() })
  }

  getInitialMode() {
    const { date, time } = this.props
    return !date && time ? 'hour' : 'day'
  }

  open = (e) => {
    debug('open()')
    _.invokeArgs('onOpen', [e, this.props], this.props)

    this.trySetState({ open: true })
  }

  close = (e) => {
    debug('close()')
    _.invokeArgs('onClose', [e, this.props], this.props)

    this.trySetState({ open: false, mode: this.getInitialMode() })
  }

  toggle = e => (this.state.open ? this.close(e) : this.open(e))

  handleChange = (e, { value, mode }) => {
    debug('handleChange()', value, e)
    e.stopPropagation()
    e.nativeEvent.stopImmediatePropagation()

    this.trySetState({ value, mode })
    _.invokeArgs('onChange', [e, { ...this.props, value }], this.props)

    // when there's no mode, the selection process has ended
    if (!mode) this.close()
  }

  /**
   * Return a formatted date or date/time string
   */
  getFormattedDate(value = this.state.value) {
    debug('getFormattedDate()', value)
    const { date, dateFormatter, time, timeFormatter } = this.props

    if (date && time) return `${dateFormatter(value)} ${timeFormatter(value)}`

    if (!date && time) return timeFormatter(value)

    return dateFormatter(value)
  }

  handlePreviousPage = (e) => {
    this.setPage(e, -1)
  }

  handleNextPage = (e) => {
    this.setPage(e, 1)
  }

  setPage = (e, count) => {
    const { mode, value } = this.props

    e.stopPropagation()

    switch (mode) {
      case 'day':
        this.setMonth(e, { page: count })
        break

      case 'month':
        this.setYear(e, value.getFullYear() + count, mode)
        break

      case 'year':
        this.setYear(e, value.getFullYear() + (count * 16), mode)
        break

      default:
        break
    }
  }

  handleChangeMode = (e, { mode }) => {
    _.invokeArgs('onChange', [e, { ...this.props, mode }], this.props)
  }

  setMonth = (e, props) => {
    const { value, page } = props
    const mode = 'day'
    const month = !value && page
      ? value.getMonth() + page
      : value

    value.setMonth(month)
    _.invokeArgs('onChange', [e, { ...this.props, value, mode }], this.props)
  }

  setDay = (e, day) => {
    const { time, value } = this.props

    value.setDate(day)

    const mode = time ? 'hour' : null
    _.invokeArgs('onChange', [e, { ...this.props, value, mode }], this.props)
  }

  setYear = (e, year, mode = 'day') => {
    const { value } = this.props

    value.setYear(year)
    _.invokeArgs('onChange', [e, { ...this.props, value, mode }], this.props)
  }

  setHour = (e, hour, mode = 'minute') => {
    const { value } = this.props

    value.setHours(hour)
    _.invokeArgs('onChange', [e, { ...this.props, value, mode }], this.props)
  }

  setMinute = (e, minute, mode = null) => {
    const { value } = this.props

    value.setMinutes(minute)
    _.invokeArgs('onChange', [e, { ...this.props, value, mode }], this.props)
  }

  render() {
    debug('render state', this.state)
    const {
      className,
      date,
      dateFormatter,
      disabled,
      disabledDates,
      error,
      firstDayOfWeek,
      hourFormatter,
      icon,
      minDate,
      name,
      placeholder,
      time,
      timeFormatter,
    } = this.props

    const { open, value, mode } = this.state
    const rest = getUnhandledProps(Datetime, this.props)
    const ElementType = getElementType(Datetime, this.props)

    return (
      <Popup
        {...rest}
        closeOnDocumentClick
        // TODO: Fix close on trigger blur, it closes when clicking inside the calendar.
        // DatetimeCalendar contents are changed on click, so Popup cannot find the clicked node within calendar.
        // If the clicked node is not within the Portal, it is considered a "blur" and closes.
        // Enable close on trigger blur after this is fixed.
        // Portal should be able to identify clicks within the portal even with no e.target, perhaps using x y coords.
        closeOnTriggerBlur={false}
        closeOnTriggerClick={false}
        closeOnTriggerMouseLeave={false}
        openOnTriggerClick={false}
        openOnTriggerFocus
        openOnTriggerMouseEnter={false}
        onClose={this.close}
        onOpen={this.open}
        open={open}
        position='bottom left'
        style={popupStyle}
        trigger={(
          <Input
            type='text'
            name={name}
            icon={icon}
            className={className}
            disabled={disabled}
            error={error}
            iconPosition='left'
            placeholder={placeholder}
            value={this.getFormattedDate(value)}
          />
        )}
      >
        <DatetimeMenu
          mode={mode}
          onChangeMode={this.handleChangeMode}
          onNextPage={this.handleNextPage}
          onPreviousPage={this.handlePreviousPage}
          value={value}
        />
        <DatetimeCalendar
          date={date}
          dateFormatter={dateFormatter}
          disabledDates={disabledDates}
          firstDayOfWeek={firstDayOfWeek}
          hourFormatter={hourFormatter}
          minDate={minDate}
          mode={mode}
          onChange={this.handleChange}
          time={time}
          timeFormatter={timeFormatter}
          value={value}
        />
      </Popup>
    )
  }
}
