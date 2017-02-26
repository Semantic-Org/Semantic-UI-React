import React from 'react'
import { Datetime } from 'semantic-ui-react'

const DateTimeExampleError = () => (
	<Datetime
			defaultOpen={false}
			time={false}
			placeholder='Select Date'
			error={true}
	/>
)

export default DateTimeExampleError
