import React from 'react'

import DatetimeDays from 'src/addons/Datetime/DatetimeDays'
import * as common from 'test/specs/commonTests'

const requiredProps = {
  value: new Date(),
}

describe('DatetimeDays', () => {
  common.isConformant(DatetimeDays, { requiredProps })

  it('renders all calendar days for Sept with Sunday as first day of week', () => {
    const date = new Date('2018 09 05')

    const calendarDays = 'SMTWTFS262728293031123456789101112131415161718192021222324252627282930123456'
    mount(<DatetimeDays firstDayOfWeek={0} value={date} />)
      .should.have.text(calendarDays)
  })

  it('renders all calendar days for Sept with Monday as first day of week', () => {
    const date = new Date('2018 09 05')

    const calendarDays = 'MTWTFSS2728293031123456789101112131415161718192021222324252627282930'
    mount(<DatetimeDays firstDayOfWeek={1} value={date} />)
      .should.have.text(calendarDays)
  })
})
