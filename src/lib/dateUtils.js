import cx from 'classnames'
import getUnhandledProps from './getUnhandledProps'

/**
 * Utility functions used by the calendar
 */


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
	_date.setMonth(date.getMonth()-1)
	return _date
}

export function timeFormatter(date) {
		const zeroPad = function(n) {
			return (n < 10 ? '0' : '') + n;
		}
		return !!date ? `${zeroPad(date.getHours())}:${zeroPad(date.getMinutes())}` : ''
}

/**
 * A table row wrapper
 * @param {Object} props containing children
 */
export function RowWrapper(props) {
  const { children, className, scrolling} = props
  return <tr className={className}>{children}</tr>
}

/**
 * A table cell wrapper with a linked content.
 * @param {Object} props containing onClick, name and value
 */
export function ItemCell(props) {
  const {onClick, name, value, active} = props
	const className = cx({active: active})
	const rest = getUnhandledProps(ItemCell, props)
	return (
    <td {...rest} className={className} onClick={onClick}>
      {name}
    </td>
  )
}
