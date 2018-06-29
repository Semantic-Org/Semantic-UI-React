import React from 'react'

import DatetimeMinutes from 'src/addons/Datetime/DatetimeMinutes'
import * as common from 'test/specs/commonTests'

const requiredProps = {
  value: new Date(),
}

describe('DatetimeMinutes', () => {
  common.isConformant(DatetimeMinutes, { requiredProps })

  it('renders minutes in an hour at default interval (5)', () => {
    const date = new Date('2018 09 05 9:02')

    const hours = '9:00 AM9:05 AM9:10 AM9:15 AM9:20 AM9:25 AM9:30 AM9:35 AM9:40 AM9:45 AM9:50 AM9:55 AM'
    mount(<DatetimeMinutes value={date} />).should.have.text(hours)
  })

  it('renders minutes in an hour at specified interval (8)', () => {
    const date = new Date('2018 09 05 9:02')

    const hours = '9:00 AM9:08 AM9:16 AM9:24 AM9:32 AM9:40 AM9:48 AM9:56 AM'
    mount(<DatetimeMinutes value={date} interval={8} />).should.have.text(hours)
  })
})
