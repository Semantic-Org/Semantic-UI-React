import React from 'react'
import { Datetime } from 'semantic-ui-react'

 // Return locale formatted date string
const dateFormatter = (date) => !!date ? date.toLocaleDateString() : ''

// Returns locale formatted time with the seconds removed
const timeFormatter = (date) => {
  if (!!date) {
    const timeString = date.toLocaleTimeString()
    return timeString.split(':').slice(0, 2).join(':')
  }
  return ''
}

const DateTimeExampleFormatters = () => (
  <Datetime
    time
    defaultValue={new Date()}
    dateFormatter={dateFormatter}
    timeFormatter={timeFormatter}
  />
)

export default DateTimeExampleFormatters
