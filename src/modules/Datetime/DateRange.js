import React, { PropTypes } from 'react'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  makeDebugger,
  META,
} from '../../lib'

import { defaultDateFormatter, defaultTimeFormatter } from '../../lib/dateUtils'
import Calendar from './Calendar'
import Input from '../../elements/Input'
import Popup from '../Popup'
import Grid from '../../collections/Grid'

const debug = makeDebugger('datetime')

/**
 * A <Datetime/> allows a user to select a calendar date and/or time as well
 * as handle date ranges.
 * @see Form
 */
export default class DateRange extends Component {
  static _meta = {
    name: 'DateRange',
    type: META.TYPES.MODULE,
  }

  static propTypes = {
    /**
     * Textual content for the various text element of the calendar.
     * {
     *   daysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
     *   daysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
     *   months: [
     *     'January',
     *     'February',
     *     'March',
     *     'April',
     *     'May',
     *     'June',
     *     'July',
     *     'August',
     *     'September',
     *     'October',
     *     'November',
     *     'December',
     *   ],
     *   monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', Nov', 'Dec'],
     *   today: 'Today',
     *   now: 'Now',
     *   am: 'AM',
     *   pm: 'PM',
     * }
     */
    content: PropTypes.object,

    /** Enables date selection. */
    date: PropTypes.bool,

    /**
     * A function that will return a Date object as a formatted string in the
     * current locale. By default the Date will formatted as YYYY-MM-DD.
     */
    // TODO add signature
    dateFormatter: PropTypes.func,

    /** initial value for left and right months **/
    defaultMonths: PropTypes.arrayOf(PropTypes.number),

    /** Initial value of open. */
    defaultOpen: PropTypes.bool,

    /** Default value for rangeFocus. */
    defaultRangeFocus: PropTypes.number,

    /** The initial value for selectionEnd. */
    defaultSelectionEnd: customPropTypes.DateValue,

    /** The initial value for selectionStart. */
    defaultSelectionStart: customPropTypes.DateValue,

    /** Initial value as an array of Date object or a string that can be parsed into one. */
    defaultValue: PropTypes.arrayOf(customPropTypes.DateValue),

    /** A disabled dropdown menu or item does not allow user interaction. */
    disabled: PropTypes.bool,

    /** An errored dropdown can alert a user to a problem. */
    error: PropTypes.bool,

    /** First day of the week. Can be either 0 (Sunday), 1 (Monday) **/
    firstDayOfWeek: PropTypes.number,

    /** Shorthand for Icon. */
    icon: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.object,
    ]),

    /** An array of dates that should be marked disabled in the calendar. */
    disabledDates: PropTypes.arrayOf(customPropTypes.DateValue),

    /** Do not allow dates after maxDate. */
    maxDate: customPropTypes.DateValue,

    /** Do not allow dates before minDate. */
    minDate: customPropTypes.DateValue,

    /** 2 element array of left and right months **/
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
    selectionEnd: customPropTypes.DateValue,

    /** Dates at or after selectionStart are marked as selected. */
    selectionStart: customPropTypes.DateValue,

    /** Enables time selection. */
    time: PropTypes.bool,

    /**
     * A function that will return the time image of a Date object as a formatted
     * string in the current locale. By default the time will be formatted as HH:MM.
     */
    // TODO add signature
    timeFormatter: PropTypes.func,

    /** Current value as an array of Date object or a string that can be parsed into one. */
    value: PropTypes.arrayOf(customPropTypes.DateValue),
  }

  static autoControlledProps = [
    'open',
    'value',
    'months',
    'rangeFocus',
    'selectionStart',
    'selectionEnd',
  ]

  static defaultProps = {
    icon: 'calendar',
    content: {
      daysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
      daysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ],
      monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      today: 'Today',
      now: 'Now',
      am: 'AM',
      pm: 'PM',
    },
    dateFormatter: defaultDateFormatter,
    timeFormatter: defaultTimeFormatter,
    date: true,
    time: false,
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

    this.trySetState({ open: false })
  }

  toggle = (e) => this.state.open ? this.close(e) : this.open(e)

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
  handleDateSelection = (rangeItem, e, date) => {
    debug('handleDateSelection()', rangeItem, date, e)
    e.stopPropagation()
    const { value, rangeFocus = 0 } = this.state
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
    if (rangeFocus === 1) {
      this.close()
    }
  }

  /**
   * Called when one of the calendar's changes the month
   * @param  {number} rangeItem Either 0 or 1 for left and right calendars
   * @param  {Date} date        A date in the selected month
   */
  handleMonthChange = (rangeItem, date) => {
    const months = this.getDisplayMonths()
    months[rangeItem] = date
    this.trySetState({
      months,
    })
  }

  /**
   * Return a formatted date or date/time string
   */
  getFormattedDate(value = this.state.value) {
    const formatted = []
    if (!value) return ''

    const { date, time, dateFormatter, timeFormatter } = this.props
    value.forEach((item) => {
      if (item) {
        if (date && time) {
          formatted.push(`${dateFormatter(item)} ${timeFormatter(item)}`)
        } else if (!date && time) {
          formatted.push(timeFormatter(item))
        }
        formatted.push(dateFormatter(item))
      }
    })
    return formatted.join(' ')
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
      timeFormatter,
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

    return (
      <Popup
        flowing
        on='click'
        trigger={inputElement}
        position='bottom left'
        open={open}
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        // TODO: Calendar contents are changed on click so the Popup cannot find the clicked node within calendar.
        // The Popup then considers the click to be "outside" of the calendar and closes it.
        // Enable close on document click after this is fixed.
        // The user should be able to click outside and have it close.
        // Portal should be updated to detect clicks inside/outside even with no e.target, perhaps using x y coords.
        closeOnDocumentClick={false}
      >
        <Grid columns='equal'>
          <Grid.Column>
            <Calendar
              value={months[0]}
              content={this.props.content}
              onDateSelect={this.handleDateSelection.bind(this, 0)}
              onChangeMonth={this.handleMonthChange.bind(this, 0)}
              timeFormatter={timeFormatter}
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
            <Calendar
              value={months[1]}
              content={this.props.content}
              onDateSelect={this.handleDateSelection.bind(this, 1)}
              onChangeMonth={this.handleMonthChange.bind(this, 1)}
              timeFormatter={timeFormatter}
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
