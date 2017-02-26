import React from 'react'
import { Datetime } from 'semantic-ui-react'

const DateTimeExampleDisabled = () => (
	<Datetime
			defaultOpen={false}
			time={false}
			placeholder='Disabled Date'
			disabled={true}
	/>
)

export default DateTimeExampleDisabled
