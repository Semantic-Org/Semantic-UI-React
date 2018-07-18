import React from 'react'

import FormCheckbox from 'src/collections/Form/FormCheckbox'
import Checkbox from 'src/modules/Checkbox/Checkbox'
import * as common from 'test/specs/commonTests'

describe('FormCheckbox', () => {
  common.isConformant(FormCheckbox, {
    ignoredTypingsProps: ['type'],
  })

  describe('as', () => {
    it('is "FormField" with a Checkbox control', () => {
      expect(
        shallow(<FormCheckbox />)
          .find('FormField')
          .prop('control'),
      ).toBe(Checkbox)
    })
  })
})
