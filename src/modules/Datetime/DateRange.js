import React, { PropTypes } from 'react'
import { findDOMNode } from 'react-dom'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  makeDebugger,
  META,
} from '../../lib'

import { defaultDateFormatter, defaultTimeFormatter } from '../../lib/dateUtils'
import Calendar from './Calendar'
import Input from '../../elements/Input/Input'
import Popup from '../Popup/Popup'

const debug = makeDebugger('datetime')

const popupStyle = {
  // allow the table and menu to define the whitespace within the calendar
  padding: 0,
}

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
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Additional classes. */
    className: PropTypes.string,

    /** Whether or not the menu should close when the dropdown is blurred. */
    closeOnBlur: PropTypes.bool,

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
     * @type {Object}
     */
    content: PropTypes.object,

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

    /** Initial value of open. */
    defaultOpen: PropTypes.bool,

    /** Current value as an array of Date object or a string that can be parsed
     * into one. Creates a controlled component.
     */
    value: PropTypes.arrayOf(customPropTypes.DateValue),

    /** Initial value as an array of Date object or a string that can be parsed into one */
    defaultValue: PropTypes.arrayOf(customPropTypes.DateValue),

    /** A disabled dropdown menu or item does not allow user interaction. */
    disabled: PropTypes.bool,

    /** An errored dropdown can alert a user to a problem. */
    error: PropTypes.bool,

    /** First day of the week. Can be either 0 (Sunday), 1 (Monday) **/
    firstDayOfWeek: PropTypes.number,

    /** 2 element array of left and right months **/
    months: PropTypes.arrayOf(PropTypes.number),

    /** initial value for left and right months **/
    defaultMonths: PropTypes.arrayOf(PropTypes.number),

    /** A dropdown can take the full width of its parent */
    fluid: PropTypes.bool,

    /** A dropdown menu can contain a header. */
    header: PropTypes.node,

    /** Shorthand for Icon. */
    icon: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.object,
    ]),

    /** A dropdown can be formatted to appear inline in other content. */
    inline: PropTypes.bool,

    /** Name of the input field which holds the date value */
    name: PropTypes.string,

    /**
     * Called on blur.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onBlur: PropTypes.func,

    /**
     * Called when the user attempts to change the value.
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

    /**
     * Called on click.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onClick: PropTypes.func,

    /**
     * Called on focus.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onFocus: PropTypes.func,

    /**
     * Called on mousedown.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props.
     */
    onMouseDown: PropTypes.func,

    /** Controls whether or not the dropdown menu is displayed. */
    open: PropTypes.bool,

    /** Whether or not the menu should open when the dropdown is focused. */
    openOnFocus: PropTypes.bool,

    /** Placeholder text. */
    placeholder: PropTypes.string,

    /**
     * Handle a date range. This will cause the Datetime component to
     * render two calendar months which represent the start and end
     * of the range
     * @type {bool}
     */
    range: PropTypes.bool,

    /**
     * A function that takes (data, index, defaultLabelProps) and returns
     * shorthand for Label .
     */
    renderLabel: PropTypes.func,

    /** Define whether the highlighted item should be selected on blur. */
    selectOnBlur: PropTypes.bool,

    /** A dropdown can receive focus. */
    tabIndex: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string,
    ]),

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
		rangeFocus: PropTypes.number,
		defaultRangeFocus: PropTypes.number,

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
  }

  static autoControlledProps = [
    'open',
    'value',
    'months',
		'rangeFocus',
		'selectionStart',
		'selectionEnd'
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
    time: false
  }

  open = (e) => {
    debug('open()')

    const { onOpen } = this.props
    if (onOpen) onOpen(e, this.props)

    this.trySetState({ open: true })
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
  handleDateSelection = (rangeItem, date, e) => {
    debug('handleDateSelection()', date, e)
    e.stopPropagation()
		console.log('range item and date', rangeItem, date)
    e.nativeEvent.stopImmediatePropagation()
    const selectedDate = new Date(date)
		const currentRange = this.state.value
		currentRange[rangeItem] = selectedDate
		const rangeState = {
			[rangeItem == 0 ? 'selectionStart' : 'selectionEnd']: date
		}
    console.log('current range value', rangeState)
    this.trySetState({
      value: currentRange,
			...rangeState
    })
		if (rangeItem == 1) {
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
      months: months
    })
  }

  /**
   * Return a formatted date or date/time string
   */
  getFormattedDate(value) {
		const formatted = []
    value = value || this.state.value
		if (!value) {
			return ''
		}
    const { date, time, dateFormatter, timeFormatter } = this.props
		value.forEach((item)=> {
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
    const {value, months} = this.state
    let [left, right] = [...months || []]
    if (!left && value.length > 0) {
      left = value[0]
    } else if(!left) {
      left = new Date()
    }
    if (!right && value.length == 2) {
      right = value[1]
    } else if (!right) {
      // set right to left, which will trigger a month chase
      right = left
    }
    if (right.getFullYear() <= left.getFullYear() &&
        right.getMonth() <= left.getMonth()) {
      const date = new Date(left)
      date.setMonth(date.getMonth()+1)
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
			disabledDates
    } = this.props
    const {
      open,
      value,
      selectionStart,
      selectionEnd
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
        style={popupStyle}
      >
				<div className="ui two column grid">
					<div className="column">
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
							range={true}
		        />
					</div>
					<div className="column">
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
					</div>
				</div>
      </Popup>
    )
  }
}
