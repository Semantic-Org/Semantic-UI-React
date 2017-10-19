import React from 'react'
import { Datetime } from 'semantic-ui-react'

const DatetimeExampleDateOnly = () => (
  <Datetime
    time={false}
    defaultValue={new Date('2017-04-24')}
    placeholder='Select Date'
  />
)

export default DatetimeExampleDateOnly
