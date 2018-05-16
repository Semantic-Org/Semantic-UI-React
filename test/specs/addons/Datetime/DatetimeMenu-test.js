import React from 'react'

import DatetimeMenu from 'src/addons/Datetime/DatetimeMenu'
import * as common from 'test/specs/commonTests'
import { sandbox } from 'test/utils'

const requiredProps = {
  value: new Date(),
  mode: 'month',
}

describe('DatetimeMenu', () => {
  common.isConformant(DatetimeMenu, { requiredProps })

  describe('onPreviousPage', () => {
    it('is called when previous clicked', () => {
      const spy = sandbox.spy()

      shallow(<DatetimeMenu onPreviousPage={spy} {...requiredProps} />)
        .find('[icon~="left"]')
        .simulate('click')

      spy.should.have.been.calledOnce()
    })
  })

  describe('onNextPage', () => {
    it('is called when next is clicked', () => {
      const spy = sandbox.spy()

      shallow(<DatetimeMenu onNextPage={spy} {...requiredProps} />)
        .find('[icon~="right"]')
        .simulate('click')

      spy.should.have.been.calledOnce()
    })
  })

  describe('onDateChangeMode', () => {
    it('is called with "month" mode when month is clicked', () => {
      const spy = sandbox.spy()

      const props = { value: new Date(), mode: 'day' }

      mount(<DatetimeMenu onDateChangeMode={spy} {...props} />)
        .find('[name="month"]')
        .simulate('click')

      spy.should.have.been.calledOnce()
      spy.args[0][1].should.have.property('mode', 'month')
    })

    it('is called with "year" mode when year is clicked', () => {
      const spy = sandbox.spy()

      const props = { value: new Date(), mode: 'day' }

      mount(<DatetimeMenu onDateChangeMode={spy} {...props} />)
        .find('[name="year"]')
        .simulate('click')

      spy.should.have.been.calledOnce()
      spy.args[0][1].should.have.property('mode', 'year')
    })
  })
})
