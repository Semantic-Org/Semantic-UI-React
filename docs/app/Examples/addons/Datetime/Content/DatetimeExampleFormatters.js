import React from 'react'
import { Datetime } from 'semantic-ui-react'

// IE or standard language
const locale = navigator.userLanguage || navigator.language

// Locale formatted date
const dateFormatter = date => date.toLocaleDateString(locale)

// Locale formatted 12-hour time with seconds removed
const timeFormatter = date => date.toLocaleTimeString(locale, { hour12: true }).replace(/:\d+ /, ' ')

const DatetimeExampleFormatters = () => (
  <Datetime
    time
    defaultValue={new Date()}
    dateFormatter={dateFormatter}
    timeFormatter={timeFormatter}
  />
)

export default DatetimeExampleFormatters
