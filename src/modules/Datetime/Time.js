import React, { PropTypes } from 'react'
import cx from 'classnames'
import DayCell from './DayCell'
import CalendarHeader from './CalendarHeader'
import DropDown from '../Dropdown/Dropdown'
import Button from '../../elements/Button'

import {
  AutoControlledComponent as Component,
  customPropTypes,
  getElementType,
  getUnhandledProps,
  META,
  useKeyOnly,
} from '../../lib'

import Table from '../../collections/Table/Table'

/**
 * A row within a calenar month when in MONTH mode
 * @param {Object} props containing children
 */
function RowWrapper(props) {
  const { children, className, scrolling } = props
  const classes = cx(
    className
  )
  return <Table.Row className={classes}>{children}</Table.Row>
}

/**
 * A cell within a calendar when in MONTH or YEAR mode
 * @param {Object} props containing onClick, name and value
 */
class ItemCell extends Component {
  handleClick = (e) => {
    const { onClick, value } = this.props
    onClick(e, { value, nextMode: 'DAY' })
  }

  render() {
    const { name } = this.props
    return (
      <Table.Cell>
        <a onClick={this.handleClick}>{name}</a>
      </Table.Cell>
    )
  }
}

const _meta = {
  name: 'CalendarMonth',
  parent: 'Datetime',
  type: META.TYPES.MODULE,
}

/**
 * A <Datetime/> allows a user to select a calendar date and/or time as well
 * as handle date ranges.
 * @see Form
 */
export default class Time extends Component {
  static _meta = _meta

  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** Primary content. */
    children: PropTypes.node,

    /** Additional classes. */
    className: PropTypes.string,

    /** Textual context constants **/
    content: PropTypes.object,

    /** Date/Time **/
    date: PropTypes.any,

    /** Initial value of date. */
    defaultDate: PropTypes.any,

    /** Current Month Mode (HOUR or MINUTE selection) **/
    mode: PropTypes.string,

    /** default mode (HOUR) **/
    defaultMode: PropTypes.string,
    /**
     * First Hour of the day (24H)
     */
    firstHourOfDay: PropTypes.number,
    /**
     * Last Hour of the day (24H)
     */
    LastHourOfDay: PropTypes.number,
    /**
     * Handler fired when a date is selected
     * @type {[type]}
     */
    onTimeSelect: PropTypes.func,
    /**
     * A function that will return the time image of a Date object as a formatted
     * string in the current locale. By default the time will be formatted as HH:MM
     * @type {function}
     */
    timeFormatter: PropTypes.func
  }

  static defaultProps = {
    firstHourOfDay: 0,
    LastHourOfDay: 23,
    timeFormatter: (date) => {
      return !!date ? `${date.getHours()}:${date.getMinutes()}` : ''
    }
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
      mode: 'HOUR'
    }
  }

  /**
   * Return the ordered labels for days of the week,
   * accounting for the locale's first day of the week
   */
  getHourLabels() {
    const { timeFormatter } = this.props
    const date = new Date()
    return [...Array(24).keys()].map((hour) => {
      date.setHours(hour)
      date.setMinutes(0)
      return timeFormatter(date)
    })
  }

  getHours() {
    const { firstHourOfDay, LastHourOfDay } = this.props
    const labels = this.getHourLabels()
    const hours = labels.slice(firstHourOfDay, LastHourOfDay)
    const rows = [...Array(6).keys()]
    const cols = [...Array(4).keys()]
    const cells = []
    let i = 0
    rows.map((row) => {
      let children = []
      cols.map((col) => {
        children.push((
          <ItemCell key={i} name={labels[i]} value={labels[i]} />
        ))
        i += 1
      })
      cells.push(RowWrapper(children))
    })
    return cells
  }

  /**
   * Handler for day cell hover events.
   * Sets state for currently un/hovered cell index
   */
  handleHover(cellIndex, isOver, e) {
    this.setState({
      hovering: isOver ? cellIndex : null
    })
  }

  /**
   * Set the current month
   *  @param  {Object} object containing one of:
   *  'value' key with the selected month number,
   *  'page' key with value of either 1 or -1 to page to the next/prev month
   */
  setHour = (e, props) => {
    e.stopPropagation()
    let { value, page, nextMode } = props
    if (!nextMode) nextMode = this.state.mode
    const date = new Date(this.state.date)
    if (!value && page) {
      value = date.getHours() + page
    }
    date.setHours(value)
    this.trySetState({
      date: date,
      mode: nextMode
    })
  }

  /**
   * Sets the current year and progresses to the next calendar mode
   * @type {String}
   */
  setMinute(e, minutes, nextMode = 'DAY') {
    e.stopPropagation()
    const date = new Date(this.state.date)
    date.setMinutes(minutes)
    this.trySetState({
      date: date,
      mode: nextMode
    })
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
   * Handle click
   * @param  {event} e
   */
  handleDayClick(day, e) {
    e.stopPropagation()
    const date = new Date(this.state.date);
    date.setDate(day)
    const { onDateSelect } = this.props
    if (onDateSelect) onDateSelect(new Date(date), e)
  }

  /**
   * Returns the calendar body content
   */
  getBodyContent() {
    const { mode, date } = this.state
    if (mode === 'HOUR') {
      return this.getHours()
    } else if (mode === 'MINUTE') {
      return this.getMinutes()
    }
    return false
  }

  render() {
    const { mode, date } = this.state
    const colSpan = {
      DAY: 7,
      MONTH: 3,
      YEAR: 4,
    }
    return (
      <Table compact>
        <Table.Header>
          <Table.Row>
            <Table.Cell colSpan={colSpan[mode]}>
              {mode} {date}
            </Table.Cell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {this.getBodyContent()}
        </Table.Body>
      </Table>
    )
  }
}
