import React from 'react'
import { Datetime } from 'semantic-ui-react'

/**
 * Return locale formatted date string
 */
const dateFormatter = (date) => {
	return !!date ? date.toLocaleDateString() : ''
}

/**
 * Returns locale formatted time with the seconds removed
 */
const timeFormatter = (date) => {
	if (!!date) {
		const timeString = date.toLocaleTimeString()
		return timeString.split(':').slice(0, 2).join(':')
	}
	return ''
}

const DateTimeExampleFormatters = () => (
	<Datetime
			defaultOpen={false}
			time={true}
			defaultValue={new Date()}
			dateFormatter={dateFormatter}
			timeFormatter={timeFormatter}
	/>
)

export default DateTimeExampleFormatters
