import React from 'react'

import FormDropdown from 'src/collections/Form/FormDropdown'
import Dropdown from 'src/modules/Dropdown/Dropdown'
import * as common from 'test/specs/commonTests'

describe('FormDropdown', () => {
  common.isConformant(FormDropdown)
  common.labelImplementsHtmlForProp(FormDropdown)

  it('renders a FormField with a Dropdown control', () => {
    shallow(<FormDropdown />)
      .find('FormField')
      .should.have.prop('control', Dropdown)
  })
})
