import React from 'react'

import DropdownText from 'src/modules/Dropdown/DropdownText'
import * as common from 'test/specs/commonTests'

describe('DropdownText', () => {
  common.isConformant(DropdownText)
  common.forwardsRef(DropdownText)
  common.rendersChildren(DropdownText)

  it('aria attributes', () => {
    const wrapper = shallow(<DropdownText />)

    wrapper.should.have.prop('aria-live', 'polite')
    wrapper.should.have.prop('aria-atomic', true)
    wrapper.should.have.prop('role', 'alert')
  })
})
