import React from 'react'

import Radio from 'src/addons/Radio/Radio'
import Checkbox from 'src/modules/Checkbox/Checkbox'
import * as common from 'test/specs/commonTests'

describe('Radio', () => {
  common.isConformant(Radio)
  common.forwardsRef(Radio, { tagName: 'input' })

  it('renders a radio Checkbox', () => {
    const wrapper = shallow(<Radio />)
    wrapper.type().should.equal(Checkbox)

    wrapper.should.have.prop('radio', true)
  })

  it('is not a radio when slider', () => {
    shallow(<Radio slider />).should.not.have.prop('radio')
  })

  it('is not a radio when toggle', () => {
    shallow(<Radio toggle />).should.not.have.prop('radio')
  })
})
