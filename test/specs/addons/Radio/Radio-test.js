import React from 'react'

import Radio from 'src/addons/Radio/Radio'
import Checkbox from 'src/modules/Checkbox/Checkbox'
import * as common from 'test/specs/commonTests'

describe('Radio', () => {
  common.isConformant(Radio)

  it('renders a radio Checkbox', () => {
    const wrapper = shallow(<Radio />)
    expect(wrapper.type()).toBe(Checkbox)

    expect(wrapper.prop('radio')).toBe(true)
  })

  it('is not a radio when slider', () => {
    expect(shallow(<Radio slider />).prop('radio')).toBeUndefined()
  })

  it('is not a radio when toggle', () => {
    expect(shallow(<Radio toggle />).prop('radio')).toBeUndefined()
  })
})
