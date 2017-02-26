import React from 'react'
import { Datetime } from 'semantic-ui-react'

const DateTimeExampleStartSunday = () => (
	<Datetime
			defaultOpen={false}
			time={false}
			placeholder='Select Date'
			firstDayOfWeek={0}
	/>
)

export default DateTimeExampleStartSunday
