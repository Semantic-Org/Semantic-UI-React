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

    const hours = /12:001:002:003:004:005:006:007:008:009:0010:0011:00$/
    mount(<DatetimeHours value={date} />).should.have.text().match(hours)
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

  describe('onAmpmChange', () => {
    const AM_TIME = new Date('2018 09 05 03:55:08')
    const PM_TIME = new Date('2018 09 05 15:55:08')
    let spy
    beforeEach(() => {
      spy = sandbox.spy()
    })

    it('should have ampm value as AM for time: 03:55:08', () => {
      mount(<DatetimeHours value={AM_TIME} />)
        .find('DropdownItem')
        .at(0)
        .should.have.prop('selected', true)
    })

    it('should have ampm value as PM for time: 15:55:08', () => {
      mount(<DatetimeHours value={PM_TIME} />)
        .find('DropdownItem')
        .at(1)
        .should.have.prop('selected', true)
    })

    it('should set time to AM', () => {
      mount(<DatetimeHours onDateChange={spy} value={PM_TIME} />)
        .find('DropdownItem')
        .at(0)
        .simulate('click')

      spy.should.have.been.calledOnce()
      spy.args[0][1].should.have.deep.property('value', new Date('2018 09 05 03:55:08'))
    })

    it('should set time to PM', () => {
      mount(<DatetimeHours onDateChange={spy} value={AM_TIME} />)
        .find('DropdownItem')
        .at(1)
        .simulate('click')

      spy.should.have.been.calledOnce()
      spy.args[0][1].should.have.deep.property('value', new Date('2018 09 05 15:55:08'))
    })

    it('should maintain time (15:55) at PM when "PM" is selected', () => {
      mount(<DatetimeHours onDateChange={spy} value={PM_TIME} />)
        .find('DropdownItem')
        .at(1)
        .simulate('click')

      spy.should.have.not.been.called()
    })

    it('should not change "mode" when ampm is selected', () => {
      mount(<DatetimeHours onDateChange={spy} value={PM_TIME} />)
        .find('DropdownItem')
        .at(0)
        .simulate('click')

      spy.should.have.been.calledOnce()
      spy.args[0][1].should.have.deep.property('mode', 'hour')
    })
  })
})
