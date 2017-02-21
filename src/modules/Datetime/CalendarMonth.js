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

/**
 * A row within a calenar month (a week)
 * @param {Object} props containing children
 */
function CalendarMonthWeek(props) {
  const { children, className, scrolling } = props
  const classes = cx(
    className
  )
  return <tr className={classes}>{children}</tr>
}

/**
 * A row within a calenar month when in MONTH mode
 * @param {Object} props containing children
 */
function RowWrapper(props) {
  const { children, className, scrolling } = props
  const classes = cx(
    className
  )
  return <tr className={classes}>{children}</tr>
}

/**
 * A cell within a calendar when in MONTH or YEAR mode
 * @param {Object} props containing onClick, name and value
 */
function ItemCell(props) {
  const {onClick, name, value} = props
  return (
    <td>
      <a onClick={(e)=>{onClick(e, {value: value, nextMode: 'DAY'})}}>
        {name}
      </a>
    </td>
  )
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
export default class CalendarMonth extends Component {
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

    /** Month **/
    date: PropTypes.any,

    /** Initial value of date. */
    defaultDate: PropTypes.any,

    /** Current Month Mode (DAY, MONTH or YEAR selection) **/
    mode: PropTypes.string,

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
    onDateSelect: PropTypes.func
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
   * Return the ordered labels for days of the week,
   * accounting for the locale's first day of the week
   */
  getDayLabels() {
    let realDay;
    return [...Array(7).keys()].map((day) => {
      realDay = day + this.props.firstDayOfWeek
      if (realDay >= 7) {
          realDay = 0
      }
      return this.props.content.daysShort[realDay]
    })
  }

  /**
   * Return the header cells for days of the week
   */
  getDayHeaders() {
    const labels = this.getDayLabels()
    const headers = labels.map((day, index) => {
        return (
            <th key={index}>{day}</th>
        )
    })
    return headers
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

  /**
   * Return the first date of the month out of a given date or current date
   */
  getFirstOfMonth(month, year) {
    month = !!month ? month : this.getMonth()
    year = year || this.getYear()
    return new Date(this.getYear(), this.getMonth(), 1)
  }

  /**
   * Number of days in a month
   */
  daysInMonth(month, year) {
    month = !!month ? month : this.getMonth() + 1
    year = year || this.getYear()
    return new Date(year, month, 0).getDate();
  }

  /**
   * Return a date from the last month
   */
  lastMonth(date) {
    date = !!date ? date : new Date(this.state.date)
    date.setMonth(date.getMonth()-1)
    return date
  }

  /**
   * Return a 42 element array (number of cells in the calendar month),
   * populated with DayCell instances of either days of the current month,
   * or those of the boundry months around it.
   */
  getDays() {
    const firstDay = this.getFirstOfMonth()
    const firstWeekDay = firstDay.getDay()
    const daysInMonth = this.daysInMonth()
    const lastMonth = this.lastMonth()
    const prevDaysInMonth = this.daysInMonth(lastMonth.getMonth()+1  , lastMonth.getFullYear())
    const monthCells = [...Array(42).keys()]
    const realFirstWeekDay = firstWeekDay - this.props.firstDayOfWeek
    let day = 0, nextDay = 0
    return monthCells.map((cell, index) => {
      const dayParams = {
          key: index,
          index: cell,
          active: this.state.hovering == cell,
          onMouseOver: this.handleHover.bind(this, cell, true),
          onMouseOut: this.handleHover.bind(this, cell, false)
      }
      if (cell >= realFirstWeekDay && day < daysInMonth) {
        dayParams.day = day += 1
      } else if (cell < realFirstWeekDay) {
        dayParams.day = prevDaysInMonth - realFirstWeekDay + cell + 1
        dayParams.disabled = true
      } else if (cell > daysInMonth) {
        dayParams.day = nextDay += 1
        dayParams.disabled = true
      }
      dayParams.onClick = this.handleDayClick.bind(this, dayParams.day)
      return (<DayCell {...dayParams}/>)
    })
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
   * Return the calendar month day structure wrapped in rows
   */
  getMonthDays() {
    const dayCells = this.getDays()
    const cells = []
    const weeks = [...Array(6).keys()]
    const oneWeek = [...Array(7).keys()]
    let i=0
    weeks.map((weeks, weekIndex) => {
        let children = []
        oneWeek.map((day, dayIndex) => {
            children.push((dayCells[i]))
            i+=1
        })
        cells.push(CalendarMonthWeek({children}))
    })
    return cells
  }

  getMonths() {
    const row = [...Array(4).keys()]
    const col = [...Array(3).keys()]
    const cells = []
    let i = 0
    row.map((monthRow, rowIndex) => {
      let children = []
      col.map((month, monthIndex) => {
        let thisMonth = i
        children.push((
          <ItemCell
            key={i}
            value={i}
            name={this.props.content.months[i]}
            onClick={(e)=>this.setMonth(e, {value: thisMonth, nextMode: 'DAY'})}
          />
        ))
        i += 1
      })
      cells.push(RowWrapper({children}))
    })
    return cells
  }

  getYears() {
    const row = [...Array(4).keys()]
    const col = [...Array(4).keys()]
    const yearIter = [...Array(12).keys()]
    const cells = []
    const currentYear = this.getYear()
    const startYear = currentYear - 8
    let i = startYear
    let children = []
    row.map((yearRow, rowIndex) => {
      let children = []
      col.map((year, yearIndex) => {
        let thisYear = i
        children.push((
          <ItemCell
                key={thisYear}
                value={thisYear}
                name={thisYear}
                onClick={(e)=>{this.setYear(e, thisYear)}}/>
        ))
        i += 1
      })
      cells.push(RowWrapper({children}))
    })
    return cells
  }

  /**
   * Set the current month
   *  @param  {Object} object containing one of:
   *  'value' key with the selected month number,
   *  'page' key with value of either 1 or -1 to page to the next/prev month
   */
  setMonth = (e, props) => {
    e.stopPropagation()
    let {value, page, nextMode} = props
    if (!nextMode) nextMode = this.state.mode
    let date = new Date(this.state.date)
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
    let date = new Date(this.state.date)
    date.setYear(year)
    this.trySetState({
      date: date,
      mode: nextMode
    })
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
   * Return the current month's name as provided in the content prop
   */
  getMonthName() {
      const {content} = this.props
      return content.months[this.getMonth()]
  }

  /**
   * Returns the calendar body content
   */
  getBodyContent() {
    const {mode} = this.state
    if (mode == 'DAY') {
      return this.getMonthDays()
    } else if (mode == 'MONTH') {
      return this.getMonths()
    } else if (mode == 'YEAR') {
      return this.getYears()
    }
    return false
  }

  render() {
    const dayCells = this.getDays()
    const cells = this.getMonthDays()
    const thisMonth = this.getMonth()
    const {mode} = this.state
    const colSpan = {
      'DAY': 7,
      'MONTH': 3,
      'YEAR': 4
    }
    return (
      <table className="ui table">
        <thead>
          <tr>
            <td colSpan={colSpan[mode]}>
              <CalendarHeader
                monthName={this.getMonthName()}
                year={this.getYear()}
                mode={mode}
                onPrevious={this.page.bind(this, -1)}
                onNext={this.page.bind(this, 1)}
                onChangeMode={this.changeMode}/>
            </td>
          </tr>
          {mode == 'DAY' ? this.getDayHeaders() : false}
        </thead>
        <tbody>
          {this.getBodyContent()}
        </tbody>
      </table>
    )
  }
}
