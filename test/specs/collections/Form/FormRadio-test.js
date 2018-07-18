import React from 'react'

import Radio from 'src/addons/Radio/Radio'
import FormRadio from 'src/collections/Form/FormRadio'
import * as common from 'test/specs/commonTests'

describe('FormRadio', () => {
  common.isConformant(FormRadio, {
    ignoredTypingsProps: ['type'],
  })

  describe('as', () => {
    it('is "FormField" with a Radio control', () => {
      expect(
        shallow(<FormRadio />)
          .find('FormField')
          .prop('control'),
      ).toBe(Radio)
    })
  })
})
