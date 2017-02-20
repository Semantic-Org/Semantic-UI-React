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
      // date: new Date(),
      firstDayOfWeek: 1
  }

  static autoControlledProps = [
    'date'
  ]

  constructor() {
    super()
    this.state = {
        date: new Date(),
        hovering: null
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

  getMonth() {
    return this.state.date.getMonth()
  }

  getDayOfWeek() {
    return this.state.date.getDay()
  }

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
      dayParams.onClick = this.handleClick.bind(this, dayParams.day)
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

  /**
   * Set the current month
   *  @param  {Object} object containing one of:
   *  'value' key with the selected month number,
   *  'page' key with value of either 1 or -1 to page to the next/prev month
   */
  setMonth = (e, props) => {
      console.log(arguments)
    let {value, page} = props
    let date = new Date(this.state.date)
    if (!value && page) {
      value = date.getMonth() + page
    }
    date.setMonth(value)
    this.setState({
      date: date
    })
  }


  /**
   * Event handler called when paging months
   * @param  {number} direction Eitehr 1 or -1 to indicate the next/prev month
   * @param  {event} e
   */
  changeMonth = (direction, e) => {
      e.stopPropagation()
      this.setMonth(e, {page: direction})
  }

  /**
   * Handle click
   * @param  {event} e
   */
  handleClick(day, e) {
    e.stopPropagation()
    const date = new Date(this.state.date);
    date.setDate(day)
    const { onDateSelect } = this.props
    if (onDateSelect) onDateSelect(new Date(date), e)
  }

  getMonthName() {
      const {content} = this.props
      return content.months[this.getMonth()]
  }

  getMonthOptions() {
    return this.props.content.months.map((month, index)=>{
        return {value: index, text:month}
    })
  }

  render() {
    const dayCells = this.getDays()
    const cells = this.getMonthDays()
    const thisMonth = this.getMonth()
    return (
      <table className="ui table">
        <thead>
          <tr>
            <td colSpan="7">
              <div className="ui fluid four item compact text menu">
                <a className="item" onClick={this.changeMonth.bind(null, -1)}>
                  <i className="angle double left icon"></i>
                </a>
                <a className="item">
                  {this.getMonthName()}
                </a>
                <a className="item">
                  {this.getYear()}
                </a>
                  {/* <Button.Group className='basic'>
                    <Button>{this.getMonthName()}</Button>
                      <DropDown floating button className='icon' onChange={this.setMonth}>
                        <DropDown.Menu>
                          {this.getMonthOptions().map((item, index)=>{
                            return (
                                <DropDown.Item
                                  value={item.value}
                                  text={item.text}
                                  onClick={this.setMonth}
                                  active={thisMonth==item.value}/>
                            )
                          })}
                        </DropDown.Menu>
                    </DropDown>
                  </Button.Group> */}

                <a className="item" onClick={this.changeMonth.bind(null, 1)}>
                  <i className="angle double right icon"></i>
                </a>
              </div>
            </td>
          </tr>
          <tr>{this.getDayHeaders()}</tr>
        </thead>
        <tbody>
          {cells}
        </tbody>
      </table>
    )
  }
}
