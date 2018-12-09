import _ from 'lodash'

export const labels = {
  daysShort: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
  daysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  months: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
}

/**
 * Returns the text name of the given date object.
 *
 * @param {Date} date - A date object.
 * @returns {string}
 */
export const getMonthName = date => labels.months[date.getMonth()]

const zeroPad = val => _.padStart(val, 2, '0')

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
* Returns day of week (0 - 6) for a given date.
* The returned day depends on the first day of the week.
*/
export function dayOfWeekForDate(date, firstDayOfWeek) {
  const DAYS_IN_WEEK = 7

  let dayOfWeek = date.getDay() - firstDayOfWeek
  if (dayOfWeek < 0) {
    dayOfWeek = DAYS_IN_WEEK - date.getDay() - firstDayOfWeek
  }
  return dayOfWeek
}

/**
* Return number of weeks in a month.
*/
export function weeksInMonth(date, firstDayOfWeek) {
  const DAYS_IN_WEEK = 7

  const _firstOfMonth = getFirstOfMonth(date)
  const _daysInMonth = daysInMonth(date)
  const _offset = dayOfWeekForDate(_firstOfMonth, firstDayOfWeek)

  return Math.ceil((_daysInMonth + _offset) / DAYS_IN_WEEK)
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
  return date ? `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}` : ''
}

/**
* Determines whether a given date is 'AM' or 'PM'
*
* @param {Date} date - A date object.
* @returns {string}
*/
export function ampmFormatter(date) {
  if (!date) return ''
  return date.getHours() > 11 ? 'PM' : 'AM'
}

export function defaultHourFormatter(date) {
  if (!date) return ''
  if (date.getHours() < 12) return `${date.getHours() % 12 || 12}:00 AM`
  return `${date.getHours() % 12 || 12}:00 PM`
}

export function defaultMinuteFormatter(date) {
  if (!date) return ''
  return zeroPad(date.getMinutes())
}

/**
 * Default time formatter, 24 hour clock.
 * Returns a string as formatted time.
 * @param  {Date} date
 * @returns {string}
 */
export function defaultTimeFormatter(date) {
  return date ? `${date.getHours() % 12 || 12}:${defaultMinuteFormatter(date)} ${ampmFormatter(date)}` : ''
}

/**
 * Returns a YYYYMMDD string representation of this date.
 * Used to create date signatures to determine disabled dates in a
 * calendar month
 */
export function getDateString(date) {
  return `${date.getFullYear()}${date.getMonth()}${date.getDate()}`
}
