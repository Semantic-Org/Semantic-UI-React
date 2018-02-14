import React from 'react'
import { Datetime } from 'semantic-ui-react'

const Time24HourExample = () => (
  <Datetime
    time
    icon='time'
    date={false}
    hourFormatter={(date) => {
      const options = { hour12: false }
      return date.toLocaleTimeString('en-US', options).substr(0, 5)
    }}
    timeFormatter={(date) => {
      const options = { hour12: false }
      return date.toLocaleTimeString('en-US', options).substr(0, 5)
    }}
  />
)

export default Time24HourExample
