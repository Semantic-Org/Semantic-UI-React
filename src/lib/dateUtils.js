import React from 'react'
import cx from 'classnames'
import getUnhandledProps from './getUnhandledProps'

/**
 * Utility functions used by the calendar
 */
import Table from '../collections/Table/Table'

/**
 * Pad a number with a zero if it's one digit
 * @param  {number} n
 * @return {string} Returns the number padded with a zero if below 10
 */
export function zeroPad(n) {
  return (n < 10 ? '0' : '') + n;
}
/**
 * Return the first date of the month for a given date
 */
export function getFirstOfMonth(date) {
  return new Date(date.getFullYear(), date.getMonth(), 1)
}

/**
 * Number of days in a month.
 * The 0 date is teh last day of the previous month
 */
export function daysInMonth(date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
}

/**
 * Return a date from the last month
 */
export function lastMonth(date) {
  const _date = new Date(date)
  _date.setMonth(date.getMonth() - 1)
  return _date
}

export function defaultDateFormatter(date) {
  return !!date ? `${date.getFullYear()}-${zeroPad(date.getMonth() + 1)}-${zeroPad(date.getDate())}` : ''
}

/**
 * Default time formatter, 24 hour clock.
 * Returns a string as formatted time.
 * @param  {Date} date
 * @return {string}
 */
export function defaultTimeFormatter(date) {
  return !!date ? `${zeroPad(date.getHours())}:${zeroPad(date.getMinutes())}` : ''
}

/**
 * Evaluate current calendar mode and returns the next one
 * @param  {string} current mode
 * @param  {Boolean} [time=false] [description]
 * @return {[type]}               [description]
 */
export function modeTransition(mode, time = false) {
  const prefix = time ? 'time' : ''
  const transitions = {}
}

/**
 * A table row wrapper
 * @param {Object} props containing children
 */
export function RowWrapper(props) {
  const { children, className, scrolling } = props
  return <Table.Row className={className}>{children}</Table.Row>
}

/**
 * A table cell wrapper with a linked content.
 * @param {Object} props containing onClick, name and value
 */
export function ItemCell(props) {
  const { onClick, name, value, active } = props
  const className = cx({ active: active })
  const rest = getUnhandledProps(ItemCell, props)
  return (
    <Table.Cell {...rest} selectable className={className} onClick={onClick}>
      <a style={{ cursor: 'pointer' }}>{name}</a>
    </Table.Cell>
  )
}
