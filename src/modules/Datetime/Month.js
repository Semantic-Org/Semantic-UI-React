import _ from 'lodash'
import cx from 'classnames'
import React, { Component, PropTypes } from 'react'
import DayCell from './DayCell'
import * as utils from '../../lib/dateUtils'

import {
  childrenUtils,
  createShorthand,
  customPropTypes,
  META,
  getElementType,
  getUnhandledProps,
  useKeyOnly,
} from '../../lib'

/**
 * A day cell within a calendar month
 */
export default class Month extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

		/** Month **/
    date: PropTypes.any,

		/**
     * First Day of the Week.
     * Sunday = 0
     * Monday = 1
     */
    firstDayOfWeek: PropTypes.number,

		/** Textual context constants **/
    content: PropTypes.object,

    /** Primary content. */
    children: PropTypes.node,

		onClick: PropTypes.func
  }

  static _meta = {
    name: 'Month',
    parent: 'Datetime',
    type: META.TYPES.MODULE,
  }

	constructor() {
    super()
    this.state = {
        hovering: null
    }
  }

	/**
   * Handler for day cell hover events.
   * Sets state for currently un/hovered cell index
   */
  onHover(cellIndex, isOver, e) {
      this.setState({
          hovering: isOver ? cellIndex : null
      })
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
   * Return a 42 element array (number of cells in the calendar month),
   * populated with DayCell instances of either days of the current month,
   * or those of the boundry months around it.
   */
  getDays() {
		const {date, onClick} = this.props
    const firstDay = utils.getFirstOfMonth(date)
    const firstWeekDay = firstDay.getDay()
    const daysInMonth = utils.daysInMonth(date)
    const lastMonth = utils.lastMonth(date)
    const prevDaysInMonth = utils.daysInMonth(lastMonth)
    // 42 days in a calendar block will be enough to wrap a full month
    const monthCells = [...Array(42).keys()]
    // The real first day in relation to the sequene of calendar days (array index)
    let realFirstWeekDay = firstWeekDay - this.props.firstDayOfWeek
    // if the real first day is under 0, we want to shift it a week back
    if (realFirstWeekDay < 0) {
      realFirstWeekDay = 7 - firstWeekDay - this.props.firstDayOfWeek
    }
    let day = 0, nextDay = 0
    return monthCells.map((cell, index) => {
      const dayParams = {
          key: index,
          index: cell,
          active: this.state.hovering == cell,
          onMouseOver: this.onHover.bind(this, cell, true),
          onMouseOut: this.onHover.bind(this, cell, false)
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
      dayParams.onClick = (e) => { onClick(e, dayParams.day) }
      return (<DayCell {...dayParams}/>)
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
    let key=0
    weeks.map((weeks, weekIndex) => {
        let children = []
        oneWeek.map((day, dayIndex) => {
            children.push((dayCells[key]))
            key+=1
        })
        cells.push(<utils.RowWrapper children={children} key={key}/>)
    })
    return cells
  }

  render() {
    return (
			<table className="ui table">
				<thead>
					{this.getDayHeaders()}
				</thead>
				<tbody>
					{this.getMonthDays()}
				</tbody>
			</table>
    )
  }
}
