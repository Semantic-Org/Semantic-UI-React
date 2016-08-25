import React from 'react'

import Radio from 'src/addons/Radio/Radio'
import Checkbox from 'src/modules/Checkbox/Checkbox'
import * as common from 'test/specs/commonTests'

describe('Radio', () => {
  common.isConformant(Radio)

  it('renders a radio Checkbox', () => {
    const wrapper = shallow(<Radio />)
    wrapper.type().should.equal(Checkbox)

    wrapper.should.have.prop('type', 'radio')
    wrapper.should.have.prop('inputType', 'radio')
  })
})
