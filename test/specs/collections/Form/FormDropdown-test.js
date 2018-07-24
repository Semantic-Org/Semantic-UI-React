import React from 'react'

import FormDropdown from 'src/collections/Form/FormDropdown'
import Dropdown from 'src/modules/Dropdown/Dropdown'
import * as common from 'test/specs/commonTests'

describe('FormDropdown', () => {
  common.isConformant(FormDropdown)
  common.labelImplementsHtmlForProp(FormDropdown)

  describe('as', () => {
    it('is "FormField" with a Dropdown control', () => {
      expect(
        shallow(<FormDropdown />)
          .find('FormField')
          .prop('control'),
      ).toBe(Dropdown)
    })
  })
})
