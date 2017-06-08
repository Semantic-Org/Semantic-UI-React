import _ from 'lodash/fp'
import React, { Component, PropTypes } from 'react'
import DayCell from './DayCell'
import * as utils from '../../lib/dateUtils'

import {
  customPropTypes,
  META,
} from '../../lib'

import Table from '../../collections/Table/Table'

/**
 * A day cell within a calendar month
 */
export default class Month extends Component {
  static propTypes = {
    /** Textual context constants **/
    content: PropTypes.object,

    /** Month **/
    date: customPropTypes.DateValue,

    /** An array of dates that should be marked disabled in the calendar. */
    disabledDates: PropTypes.arrayOf(customPropTypes.DateValue),

    /** First day of the week (Sunday = 0, Monday = 1). */
    firstDayOfWeek: PropTypes.number,

    // TODO document
    onClick: PropTypes.func,

    /** Dates until or at selectionEnd are marked as selected. */
    selectionEnd: customPropTypes.DateValue,

    /** Dates at or after selectionStart are marked as selected. */
    selectionStart: customPropTypes.DateValue,
  }

  static _meta = {
    name: 'Month',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

  static defaultProps = {
    disabledDates: [],
  }

  constructor(props) {
    super(props)
    this.state = {
      selectionStart: props.selectionStart,
      selectionEnd: props.selectionEnd,
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      selectionStart: nextProps.selectionStart,
      selectionEnd: nextProps.selectionEnd,
    })
  }

  getDayLabels() {
    let realDay
    return _.times((day) => {
      realDay = day + this.props.firstDayOfWeek
      if (realDay >= 7) {
        realDay = 0
      }
      return this.props.content.daysShort[realDay]
    }, 7)
  }

  /**
   * Return the header cells for days of the week
   */
  getDayHeaders() {
    const labels = this.getDayLabels()
    return labels.map((day, index) => <Table.HeaderCell key={index}>{day}</Table.HeaderCell>)
  }

  getDateString(date) {
    return `${date.getFullYear()}${date.getMonth()}${date.getDate()}`
  }

  getDateStrings(dates) {
    return dates.map(date => this.getDateString(date))
  }

  /**
   * Return a 42 element array (number of cells in the calendar month),
   * populated with DayCell instances of either days of the current month,
   * or those of the boundry months around it.
   */
  getDays() {
    const { date, onClick, disabledDates } = this.props
    const { selectionStart, selectionEnd } = this.state
    const firstDay = utils.getFirstOfMonth(date)
    const firstWeekDay = firstDay.getDay()
    const daysInMonth = utils.daysInMonth(date)
    const lastMonth = utils.lastMonth(date)
    const prevDaysInMonth = utils.daysInMonth(lastMonth)
    // get a list of disabled date signatures
    const hasDisabledDates = disabledDates.length > 0
    const disabledDateSig = this.getDateStrings(disabledDates)
    // 42 days in a calendar block will be enough to wrap a full month
    const monthCells = _.range(0, 42)
    // The real first day in relation to the sequene of calendar days (array index)
    let realFirstWeekDay = firstWeekDay - this.props.firstDayOfWeek
    // if the real first day is under 0, we want to shift it a week back
    if (realFirstWeekDay < 0) {
      realFirstWeekDay = 7 - firstWeekDay - this.props.firstDayOfWeek
    }
    let day = 0
    let nextDay = 0
    return monthCells.map((cell, index) => {
      const dayCellDate = new Date(firstDay)
      const dayParams = {
        index: cell,
      }
      if (cell >= realFirstWeekDay && day < daysInMonth) {
        dayParams.day = day += 1
      } else if (cell < realFirstWeekDay) {
        dayParams.day = prevDaysInMonth - realFirstWeekDay + cell + 1
        dayParams.disabled = true
        dayCellDate.setMonth(lastMonth.getMonth())
      } else if (cell > daysInMonth) {
        dayParams.day = nextDay += 1
        dayParams.disabled = true
        dayCellDate.setMonth(dayCellDate.getMonth() + 1)
      }
      dayParams.onClick = (e) => {
        onClick(e, dayParams.day)
      }
      dayCellDate.setDate(dayParams.day)
      dayParams.date = dayCellDate
      if (selectionStart) {
        dayParams.onMouseOver = () => {
          this.setState({
            selectionEnd: dayParams.date,
          })
        }
      }
      dayParams.selected = this.isCellSelected(dayCellDate, selectionStart, selectionEnd)

      if (hasDisabledDates && !dayParams.disabled &&
        disabledDateSig.indexOf(this.getDateString(dayParams.date)) > -1) {
        dayParams.disabled = true
      }
      return dayParams
    })
  }

  /**
   * Returns true if the cell is within the start/end of the selection
   */
  isCellSelected(date, selectionStart, selectionEnd) {
    return selectionStart && selectionStart <= date
           && selectionEnd && selectionEnd >= date
           && selectionEnd > selectionStart;
  }

  getMonthDays() {
    const days = this.getDays()
    const cells = []
    const weeks = _.range(0, 6)
    const oneWeek = _.range(0, 7)
    let key = 0
    weeks.forEach(() => {
      const weekDays = []
      oneWeek.forEach(() => {
        weekDays.push((days[key]))
        key += 1
      })
      // skip fully disabled weeks
      if (_.some(d => !d.disabled, weekDays)) {
        cells.push(
          <Table.Row key={key}>
            {weekDays.map(day => <DayCell key={day.day} {...day} />)}
          </Table.Row>
        )
      }
    })
    return cells
  }

  render() {
    // TODO factor out for DateTimeGrid
    return (
      <Table unstackable basic='very' attached='bottom' size='small' compact='very' className='center aligned'>
        <Table.Header>
          {this.getDayHeaders()}
        </Table.Header>
        <Table.Body>
          {this.getMonthDays()}
        </Table.Body>
      </Table>
    )
  }
}
