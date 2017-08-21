import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React, { Component } from 'react'
import DatetimeGrid from './DatetimeGrid'

import {
  customPropTypes,
  META,
} from '../../lib'
import {getDateString} from '../../lib/dateUtils'

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

  /**
   * Return a 42 element array (number of cells in the calendar month),
   * populated with DayCell instances of either days of the current month,
   * or those of the boundry months around it.
   */
  getCells() {
    const { date, onClick, disabledDates } = this.props
    const { selectionStart, selectionEnd } = this.state

    const firstDay = new Date(date.getFullYear(), date.getMonth(), 1) //date.getFirstOfMonth()
    const firstWeekDay = firstDay.getDay()
    const daysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate() // date.daysInMonth()
    const weeksInMonth = Math.ceil(daysInMonth / 7)
    // TODO: last month
    const lastMonth = new Date(date)
    lastMonth.setMonth(date.getMonth() - 1)
    // TODO: days in month
    //const prevDaysInMonth = lastMonth.daysInMonth()
    const prevDaysInMonth = new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
    // get a list of disabled date signatures
    const hasDisabledDates = disabledDates.length > 0
    const disabledDateSig = disabledDates.map(date => getDateString(date)) //date.getDateStrings(disabledDates)

    // The real first day in relation to the sequence of calendar days (array index)
    let realFirstWeekDay = firstWeekDay - this.props.firstDayOfWeek
    // if the real first day is under 0, we want to shift it a week back
    if (realFirstWeekDay < 0) {
      realFirstWeekDay = 7 - firstWeekDay - this.props.firstDayOfWeek
    }

    let day = 0
    let nextMonthDay = 0

    return _.range(0, weeksInMonth * 7).map(i => {
      const dayCell = {
        date: new Date(firstDay),
      }

      if (i >= realFirstWeekDay && day < daysInMonth) {
        dayCell.content = day += 1
      } else if (i < realFirstWeekDay) {
        dayCell.content = prevDaysInMonth - realFirstWeekDay + i + 1
        dayCell.date.setMonth(lastMonth.getMonth())
        dayCell.disabled = true
      } else if (i >= daysInMonth) {
        dayCell.content = nextMonthDay += 1
        dayCell.date.setMonth(dayCell.date.getMonth() + 1)
        dayCell.disabled = true
      }

      dayCell.onClick = (e) => {
        if (onClick) onClick(e, dayCell.content)
      }

      dayCell.date.setDate(dayCell.content)

      if (selectionStart) {
        dayCell.onMouseOver = () => {
          this.setState({
            selectionEnd: dayCell.date,
          })
        }
      }

      dayCell.selected = selectionStart && selectionStart <= dayCell.date
        && selectionEnd && selectionEnd >= dayCell.date
        && selectionEnd > selectionStart

      if (
        hasDisabledDates
        && !_.has('disabled', dayCell)
        && _.includes(getDateString(dayCell.date), disabledDateSig)
      ) {
        dayCell.disabled = true
      }

      return {
        content: dayCell.content,
        onClick: dayCell.onClick,
        disabled: dayCell.disabled,
      }
    })
  }

  render() {
    const { content, firstDayOfWeek } = this.props

    const headers = _.times(i => content.daysShort[(i + firstDayOfWeek) % 7], 7)

    return (
      <DatetimeGrid
        headers={headers}
        columns={7}
        cells={this.getCells()}
      />
    )
  }
}
