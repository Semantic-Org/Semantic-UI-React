import React from 'react'
import { Datetime } from 'semantic-ui-react'

const DateTimeExampleStartSunday = () => (
  <div className="ui two column grid">
    <div className="column">
      <Datetime time={false} placeholder='Week starts Sunday' firstDayOfWeek={0} />
    </div>
    <div className="column">
      <Datetime time={false} placeholder='Week starts Monday' />
    </div>
  </div>
)

export default DateTimeExampleStartSunday
