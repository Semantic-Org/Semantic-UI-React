import React from 'react'

import Radio from 'src/addons/Radio/Radio'
import Checkbox from 'src/modules/Checkbox/Checkbox'
import * as common from 'test/specs/commonTests'

describe('Radio', () => {
  common.isConformant(Radio)

  it('renders a radio Checkbox', () => {
    shallow(<Radio />)
      .first()
      .should.contain(<Checkbox type='radio' inputType='radio' />)
  })
})
