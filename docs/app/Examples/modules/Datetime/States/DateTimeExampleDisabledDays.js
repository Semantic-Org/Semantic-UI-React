import React from 'react'
import { Datetime } from 'semantic-ui-react'

function yesterday() {
  const _date = new Date()
  _date.setDate(_date.getDate() - 1)
  return _date
}

function tomorrow() {
  const _date = new Date()
  _date.setDate(_date.getDate() + 1)
  return _date
}

const disabledDates = [
  yesterday(),
  new Date(),
  tomorrow(),
]
const DateTimeExampleDisabledDays = () => (
  <Datetime
    time={false}
    placeholder='Disabled days'
    disabledDates={disabledDates}
  />
)

export default DateTimeExampleDisabledDays
