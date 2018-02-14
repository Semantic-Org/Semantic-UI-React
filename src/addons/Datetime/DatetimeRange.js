import _ from 'lodash'
import PropTypes from 'prop-types'
import React from 'react'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  dateUtils,
  makeDebugger,
  META,
} from '../../lib'

import Input from '../../elements/Input'
import Popup from '../../modules/Popup'
import Grid from '../../collections/Grid'

import DatetimeCalendar from './DatetimeCalendar'

const debug = makeDebugger('datetime')

/**
 * A <Datetime/> allows a user to select a calendar date and/or time as well
 * as handle date ranges.
 * @see Form
 */
export default class DatetimeRange extends Component {
  static _meta = {
    name: 'DatetimeRange',
    parent: 'Datetime',
    type: META.TYPES.ADDON,
  }

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Enables date selection. */
    date: PropTypes.bool,

    /** A disabled dropdown menu or item does not allow user interaction. */
    disabled: PropTypes.bool,

    /** An array of dates that should be marked disabled in the calendar. */
    disabledDates: PropTypes.arrayOf(customPropTypes.date),

    /** initial value for left and right months */
    defaultMonths: PropTypes.arrayOf(PropTypes.number),

    /** Initial value of open. */
    defaultOpen: PropTypes.bool,

    /** Initial value as an array of Date object or a string that can be parsed into one. */
    defaultValue: PropTypes.arrayOf(customPropTypes.date),

    /** Default value for rangeFocus. */
    defaultRangeFocus: PropTypes.number,

    /** The initial value for selectionEnd. */
    defaultSelectionEnd: customPropTypes.date,

    /** The initial value for selectionStart. */
    defaultSelectionStart: customPropTypes.date,

    /** An errored dropdown can alert a user to a problem. */
    error: PropTypes.bool,

    /** First day of the week. Can be either 0 (Sunday), 1 (Monday) */
    firstDayOfWeek: PropTypes.number,

    /** Shorthand for Icon. */
    icon: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.object,
    ]),

    /** Do not allow dates after maxDate. */
    maxDate: customPropTypes.date,

    /** Do not allow dates before minDate. */
    minDate: customPropTypes.date,

    /** 2 element array of left and right months */
    months: PropTypes.arrayOf(PropTypes.number),

    /** Name of the input field which holds the date value. */
    name: PropTypes.string,

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

    /** The current focus date selection (0 for start date, 1 for end date). */
    rangeFocus: PropTypes.number,

    /** Dates until or at selectionEnd are marked as selected. */
    selectionEnd: customPropTypes.date,

    /** Dates at or after selectionStart are marked as selected. */
    selectionStart: customPropTypes.date,

    /** Enables time selection. */
    time: PropTypes.bool,

    timeZone: PropTypes.string,

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

    /** Current value as an array of Date object or a string that can be parsed into one. */
    value: PropTypes.arrayOf(customPropTypes.date),
    /**
     * Default mode the calendar starts at
     * @type {[type]}
     */
    defaultMode: PropTypes.string,
    /**
     * String for separating the range dates
     * @type {[type]}
     */
    separator: PropTypes.string,
    /**
     * Current mode of the calendar (month, day, hour)
     * @type {[type]}
     */
    mode: PropTypes.string,
    /**
     * Fired when a date is selected
     * @type {[type]}
     */
    onDateChange: PropTypes.func,
  }

  static autoControlledProps = [
    'open',
    'value',
    'months',
    'rangeFocus',
    'selectionStart',
    'selectionEnd',
    'mode',
  ]

  static defaultProps = {
    icon: 'calendar',
    dateFormatter: dateUtils.defaultDateFormatter,
    timeFormatter: dateUtils.defaultTimeFormatter,
    hourFormatter: dateUtils.defaultHourFormatter,
    date: true,
    time: false,
    separator: ' - ',
  }

  componentWillMount() {
    this.trySetState({
      mode: this.getInitialMode(),
    })
  }

  getInitialMode() {
    const { date, time } = this.props
    return !date && time ? 'hour' : 'day'
  }

  open = (e) => {
    debug('open()')

    const { onOpen } = this.props
    if (onOpen) onOpen(e, this.props)

    this.trySetState({
      open: true,
      rangeFocus: 0,
    })
  }

  close = (e) => {
    debug('close()')

    const { onClose } = this.props
    if (onClose) onClose(e, this.props)

    this.trySetState({
      open: false,
      mode: this.getInitialMode(),
    })
  }

  toggle = e => (this.state.open ? this.close(e) : this.open(e))

  handleOpen = (e) => {
    debug('handleOpen()', e)
    const { onOpen } = this.props
    if (onOpen) onOpen(e, this.props)

    this.open(e)
  }

  handleClose = (e) => {
    debug('handleClose()', e)
    const { onClose } = this.props
    if (onClose) onClose(e, this.props)

    this.close(e)
  }

  /**
   * Called when a date is selecte in one of the calendars
   * @param  {number} rangeItem   Either 0 or 1 for left and right calendars
   * @param  {Date}   date        The selected date
   * @param  {SyntheticEvent} e   React SynthethicEvent
   */
  handleDateSelection = (e, params) => {
    e.stopPropagation()
    const rangeId = params.rangeId
    const date = params.value
    debug('handleDateSelection()', rangeId, date)
    const { value, rangeFocus = 0 } = this.state
    const { onDateChange } = this.props
    e.nativeEvent.stopImmediatePropagation()
    const selectedDate = new Date(date)
    const currentRange = value
    currentRange[rangeFocus] = selectedDate
    const rangeState = {
      [rangeFocus === 0 ? 'selectionStart' : 'selectionEnd']: date,
    }
    this.trySetState({
      ...rangeState,
      rangeFocus: 1 - rangeFocus,
      value: currentRange,
    })
    _.invoke(this.props, 'onDateChange', e, {
      ...this.props,
      rangeId,
      value: currentRange,
    })
    if (rangeFocus === 1) {
      this.close()
    }
  }

  /**
   * Called when one of the calendar's changes the month
   * @param  {number} rangeItem Either 0 or 1 for left and right calendars
   * @param  {Date} date        A date in the selected month
   */
  handleMonthChange = (e, { rangeId, value }) => {
    const months = this.getDisplayMonths()
    months[rangeId] = value
    this.trySetState({ months })
  }

  /**
   * Return a formatted date or date/time string
   */
  getFormattedDate(value) {
    value = value || this.state.value
    const { date, time } = this.props
    const formatted = (value || []).map((d) => {
      const _date = new Date(d)
      if (date && time) {
        return `${this.props.dateFormatter(_date)} ${this.props.timeFormatter(_date)}`
      } else if (!date && time) {
        return this.props.timeFormatter(_date)
      }
      return this.props.dateFormatter(_date)
    })
    return formatted.join(this.props.separator)
  }

  /**
   * Get a 2 element array to determine the left and right
   * calendar's months.
   * If the state 'months' array is set, those values are used.
   * Otherwise, the current value dates are used.
   * The right cannot be before or equal to the left, and
   * will be adjusted as left is paged
   */
  getDisplayMonths() {
    const { value, months } = this.state
    let [left, right] = [...months || []]
    if (!value) {
      return [left, right]
    }
    if (!left && value.length > 0) {
      left = value[0]
    } else if (!left) {
      left = new Date()
    }
    if (!right && value.length === 2) {
      right = value[1]
    } else if (!right) {
      // set right to left, which will trigger a month chase
      right = left
    }
    if (right.getFullYear() <= left.getFullYear() &&
      right.getMonth() <= left.getMonth()) {
      const date = new Date(left)
      date.setMonth(date.getMonth() + 1)
      right = date
    }
    return [left, right]
  }

  render() {
    debug('render state', this.state)
    const {
      disabled,
      error,
      firstDayOfWeek,
      icon,
      name,
      placeholder,
      time,
      date,
      dateFormatter,
      timeFormatter,
      hourFormatter,
      minDate,
      maxDate,
      disabledDates,
    } = this.props
    const {
      open,
      value,
      selectionStart,
      selectionEnd,
    } = this.state
    const months = this.getDisplayMonths()
    const inputElement = (
      <Input
        fluid
        type='text'
        name={name}
        icon={icon}
        disabled={disabled}
        error={error}
        iconPosition='left'
        placeholder={placeholder}
        value={this.getFormattedDate(value)}
      />
    )
    // TODO: DATE HANDLER ON THOSE
    return (
      <Popup
        flowing
        on='click'
        trigger={inputElement}
        position='bottom left'
        open={open}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        // TODO: DatetimeCalendar contents are changed on click so the Popup cannot find the clicked node within calendar.
        // The Popup then considers the click to be "outside" of the calendar and closes it.
        // Enable close on document click after this is fixed.
        // The user should be able to click outside and have it close.
        // Portal should be updated to detect clicks inside/outside even with no e.target, perhaps using x y coords.
        closeOnDocumentClick={false}
      >
        <Grid columns='equal'>
          <Grid.Column>
            <DatetimeCalendar
              rangeId={0}
              value={months[0]}
              onDateSelect={this.handleDateSelection}
              onDateChangeMonth={this.handleMonthChange}
              dateFormatter={dateFormatter}
              timeFormatter={timeFormatter}
              hourFormatter={hourFormatter}
              firstDayOfWeek={firstDayOfWeek}
              time={time}
              date={date}
              selectionStart={selectionStart}
              selectionEnd={selectionEnd}
              minDate={minDate}
              maxDate={maxDate}
              disabledDates={disabledDates}
            />
          </Grid.Column>
          <Grid.Column>
            <DatetimeCalendar
              rangeId={1}
              value={months[1]}
              onDateSelect={this.handleDateSelection}
              onDateChangeMonth={this.handleMonthChange}
              dateFormatter={dateFormatter}
              timeFormatter={timeFormatter}
              hourFormatter={hourFormatter}
              firstDayOfWeek={firstDayOfWeek}
              time={time}
              date={date}
              selectionStart={selectionStart}
              selectionEnd={selectionEnd}
              minDate={minDate}
              maxDate={maxDate}
              disabledDates={disabledDates}
            />
          </Grid.Column>
        </Grid>
      </Popup>
    )
  }
}
