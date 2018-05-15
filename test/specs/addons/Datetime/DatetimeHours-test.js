import React from 'react'

import DatetimeHours from 'src/addons/Datetime/DatetimeHours'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

const requiredProps = {
  value: new Date(),
}

describe('DatetimeHours', () => {
  common.isConformant(DatetimeHours, { requiredProps })

  it('renders hours in a 12-hour clock', () => {
    const date = new Date('2018 09 05')

    const hours = 'Hour12:001:002:003:004:005:006:007:008:009:0010:0011:00'
    mount(<DatetimeHours value={date} />).should.have.text(hours)
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
