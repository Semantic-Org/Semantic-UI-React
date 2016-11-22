import React from 'react'

import TextArea from 'src/addons/TextArea/TextArea'
import { sandbox } from 'test/utils'
import * as common from '../commonTests'

describe('TextArea', () => {
  common.isConformant(TextArea, {
    eventTargets: {
      onChange: 'textarea',
    },
  })

  describe('onChange', () => {
    it('is called with (e, data) on change', () => {
      const spy = sandbox.spy()
      const e = { target: { value: 'name' } }
      const props = { 'data-foo': 'bar', onChange: spy }

      const wrapper = shallow(<TextArea {...props} />)

      wrapper.find('textarea').simulate('change', e)

      spy.should.have.been.calledOnce()
      spy.should.have.been.calledWithMatch(e, { ...props, value: e.target.value })
    })
  })
})
