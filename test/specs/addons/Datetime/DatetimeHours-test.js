import React from 'react'

import DatetimeHours from 'src/addons/Datetime/DatetimeHours'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

const requiredProps = {
  value: new Date(),
}

describe('DatetimeHours', () => {
  common.isConformant(DatetimeHours, { requiredProps })

  it('renders hours in a 12-hour format', () => {
    const date = new Date('2018 09 05')

    const hours = '12:00 AM1:00 AM2:00 AM3:00 AM4:00 AM5:00 AM6:00 AM7:00 AM' +
      '8:00 AM9:00 AM10:00 AM11:00 AM12:00 PM1:00 PM2:00 PM3:00 PM' +
      '4:00 PM5:00 PM6:00 PM7:00 PM8:00 PM9:00 PM10:00 PM11:00 PM'
    mount(<DatetimeHours value={date} />).should.have.text(hours)
  })

  it('renders hours in a 24-hour format', () => {
    const date = new Date('2018 09 05')

    const hours = '00:0001:0002:0003:0004:0005:0006:0007:0008:0009:0010:00' +
      '11:0012:0013:0014:0015:0016:0017:0018:0019:0020:0021:0022:0023:00'
    mount(<DatetimeHours
      formatter={(value) => {
        const options = { hour12: false }
        return value.toLocaleTimeString('en-US', options).substr(0, 5)
      }}
      value={date}
    />).should.have.text(hours)
  })

  describe('onDateChange', () => {
    it('only updates hour segment', () => {
      const spy = sandbox.spy()
      const date = new Date('2018 09 05 15:55:08')

      mount(<DatetimeHours onDateChange={spy} value={date} />)
        .find('td')
        .at(0)
        .simulate('click')

      spy.should.have.been.calledOnce()
      spy.args[0][1].should.have.deep.property('value', new Date('2018 09 05 00:55:08'))
    })
  })
})
