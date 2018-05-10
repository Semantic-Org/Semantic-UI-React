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
})
