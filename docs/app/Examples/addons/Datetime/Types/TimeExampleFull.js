import React from 'react'
import { Datetime } from 'semantic-ui-react'

const TimeExampleFull = () => (
  <Datetime
    time
    icon='time'
    date={false}
    defaultValue={new Date()}
    onChange={(e, {value}) => {
      console.log("Time selected: ", value)
    }}
  />
)

export default TimeExampleFull
