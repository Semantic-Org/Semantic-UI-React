import _ from 'lodash'

// timezone offset in ms
const tzo = new Date().getTimezoneOffset()*6e4

const daysOfMonth = (fmt) => Array(12).fill().map((o,i) => new Date(0, i).toLocaleDateString(navigator.language, {month: fmt}))
const daysOfWeek = (fmt) => Array(7).fill().map((o,i) => new Date(tzo+1/1.2e-8*(i+4)).toLocaleDateString('en-US', {weekday: fmt}))

export const labels = {
  daysShort: daysOfWeek('short'), // ['Sun', 'Mon', 'Tue', ...] --- localized
  daysFull: daysOfWeek('long'), // ['Sunday', 'Monday', 'Tuesday', ...] --- localized
  months: daysOfMonth('long') // ['January', 'February', 'March', ...] --- localized
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

function ampmFormatter(date) {
  if (!date) return ''
  return date.getHours() > 11 ? 'PM' : 'AM'
}

export function defaultHourFormatter(date) {
  if (!date) return ''
  if(Date.prototype.toLocaleTimeString)
    return date.toLocaleTimeString(navigator.language, {hour: '2-digit'});
  return date.getHours() % 12 || 12
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

