import React from 'react'
import { Datetime } from 'semantic-ui-react'

const DateRangeExample = () => (
  <Datetime.Range
    defaultValue={[]}
    dateHandler='native'
    name='date_range'
    defaultValue={[new Date('2017-02-28'), new Date('2017-03-10')]}
    onChange={(e, {rangeId, name, value}) => {
      console.log("Date selected: ", name, rangeId, value)
    }}
  />
)

export default DateRangeExample
