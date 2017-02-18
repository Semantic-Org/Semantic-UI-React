import React, { Component, PropTypes } from 'react'
import cx from 'classnames'
import DayCell from './DayCell'
import Popup from '../Popup/Popup'
import {
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

    /**
     * First Day of the Week.
     * Sunday = 0
     * Monday = 1
     */
    firstDayOfWeek: PropTypes.number
  }

  static defaultProps = {
      date: new Date(),
      firstDayOfWeek: 1
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
    return this.props.date.getMonth()
  }

  getDayOfWeek() {
    return this.props.date.getDay()
  }

  getYear() {
      return this.props.date.getFullYear()
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
    date = !!date ? date : new Date(this.props.date)
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
      if (cell >= realFirstWeekDay && day < daysInMonth) {
        day += 1
        return (<DayCell day={day} key={index}/>)
      } else if (cell < realFirstWeekDay) {
        let prevDay = prevDaysInMonth - realFirstWeekDay + cell + 1;
        return (<DayCell day={prevDay} key={index} disabled={true}/>)
      } else if (cell > daysInMonth) {
        nextDay += 1
        return (<DayCell day={nextDay} key={index} disabled={true}/>)
      }
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

  render() {
    const dayCells = this.getDays()
    const cells = this.getMonthDays()
    return (
        <table className="ui table">
            <tr>{this.getDayHeaders()}</tr>
            {cells}
        </table>
    )
  }
}
