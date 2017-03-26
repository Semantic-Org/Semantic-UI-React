/**
 * Pad a number with a zero if it's one digit
 * @param  {number} n
 * @return {string} Returns the number padded with a zero if below 10
 */
export function zeroPad(n) {
  return (n < 10 ? '0' : '') + n
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

/**
 * Return yesterday from date
 */
export function yesterday(date) {
  const _date = new Date(date)
  _date.setDate(date.getDate() - 1)
  return _date
}

/**
 * Return tomorrow from date
 */
export function tomorrow(date) {
  const _date = new Date(date)
  _date.setDate(date.getDate() + 1)
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
