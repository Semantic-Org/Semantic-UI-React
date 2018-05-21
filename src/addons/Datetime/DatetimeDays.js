import _ from 'lodash/fp'
import PropTypes from 'prop-types'
import React, { Component } from 'react'

import {
  customPropTypes,
  dateUtils,
  getElementType,
  getUnhandledProps,
  META,
} from '../../lib'

import DatetimeGrid from './DatetimeGrid'

/**
 * A day cell within a calendar month
 */
export default class DatetimeDays extends Component {
  static propTypes = {
    /** An element type to render as (string or function). */
    as: customPropTypes.as,

    /** An array of dates that should be marked disabled in the calendar. */
    disabledDates: PropTypes.arrayOf(customPropTypes.date),

    /** First day of the week (Sunday = 0, Monday = 1). */
    firstDayOfWeek: PropTypes.number,

    /**
     * Called when the user changes the value.
     *
     * @param {SyntheticEvent} event - React's original SyntheticEvent.
     * @param {object} data - All props and proposed value.
     * @param {object} data.value - The proposed new value.
     */
    onDateChange: PropTypes.func,

    /** Dates until or at selectionEnd are marked as selected. */
    selectionEnd: customPropTypes.date,

    /** Dates at or after selectionStart are marked as selected. */
    selectionStart: customPropTypes.date,

    /** Current value as a Date object. */
    value: customPropTypes.date.isRequired,
  }

  static defaultProps = {
    as: DatetimeGrid,
  }

  static _meta = {
    name: 'DatetimeDays',
    parent: 'Datetime',
    type: META.TYPES.ADDON,
  }

  // TODO this should be stateless and take selection bounds as props only
  constructor(props, context) {
    super(props, context)
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

  getCells = () => {
    const { disabledDates, firstDayOfWeek, value } = this.props
    const { selectionStart, selectionEnd } = this.state

    const firstOfMonth = dateUtils.getFirstOfMonth(value)
    const daysInMonth = dateUtils.daysInMonth(value)
    const weeksInMonth = dateUtils.weeksInMonth(value, firstDayOfWeek)
    const previousMonth = dateUtils.lastMonth(value)
    const daysInPreviousMonth = dateUtils.daysInMonth(previousMonth)

    // get a list of disabled date signatures
    const hasDisabledDates = !_.isEmpty(disabledDates)
    const disabledDateSig = _.map(date => dateUtils.getDateString(date), disabledDates)

    const firstDayOfMonth = dateUtils.dayOfWeekForDate(firstOfMonth, firstDayOfWeek)

    let cellDay = 0
    let nextMonthDay = 0

    return _.range(0, weeksInMonth * 7).map((i) => {
      const cell = {
        value: new Date(firstOfMonth),
      }

      if (i >= firstDayOfMonth && cellDay < daysInMonth) {
        cellDay += 1
        cell.content = cellDay
      } else if (i < firstDayOfMonth) {
        cell.content = daysInPreviousMonth - firstDayOfMonth + i + 1
        cell.value.setMonth(previousMonth.getMonth())
        cell.disabled = true
      } else if (i >= daysInMonth) {
        nextMonthDay += 1
        cell.content = nextMonthDay
        cell.value.setMonth(cell.value.getMonth() + 1)
        cell.disabled = true
      }

      cell.value.setDate(cell.content)

      if (selectionStart) {
        cell.onMouseOver = () => {
          this.trySetState({ selectionEnd: cell.value })
        }
      }

      cell.selected = selectionStart && selectionStart <= cell.value
        && selectionEnd && selectionEnd >= cell.value
        && selectionEnd > selectionStart

      const isDisabled = hasDisabledDates
        && !_.has('disabled', cell)
        && _.includes(dateUtils.getDateString(cell.value), disabledDateSig)

      if (isDisabled) cell.disabled = true

      cell.onClick = this.handleCellClick(cell.value)

      return cell
    })
  }

  handleCellClick = value => (e) => {
    _.invokeArgs('onDateChange', [e, { ...this.props, value }], this.props)
  }

  render() {
    const { firstDayOfWeek } = this.props

    const headers = _.times(i => dateUtils.labels.daysShort[(i + firstDayOfWeek) % 7], 7)
    const rest = getUnhandledProps(DatetimeDays, this.props)
    const ElementType = getElementType(DatetimeDays, this.props)

    return (
      <ElementType
        {...rest}
        headers={headers}
        columns={7}
        cells={this.getCells()}
      />
    )
  }
}
