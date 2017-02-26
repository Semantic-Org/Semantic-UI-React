import React from 'react'
import { Datetime } from 'semantic-ui-react'

const DateTimeExampleFull = () => (
	<Datetime
			defaultOpen={false}
			time={true}
			defaultValue={new Date()}
	/>
)

export default DateTimeExampleFull
