import React from 'react'
import { Datetime } from 'semantic-ui-react'
import {yesterday, tomorrow} from '../../../../../../src/lib/dateUtils'

const today = new Date()
const disabledDates = [
	yesterday(today),
	today,
	tomorrow(today)
]
const DateTimeExampleDisabledDays = () => (
  <Datetime
		time={false}
		placeholder='Disabled days'
		disabledDates={disabledDates}/>
)

export default DateTimeExampleDisabledDays
