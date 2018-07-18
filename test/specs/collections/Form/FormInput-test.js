import React from 'react'

import FormInput from 'src/collections/Form/FormInput'
import Input from 'src/elements/Input/Input'
import * as common from 'test/specs/commonTests'

describe('FormInput', () => {
  common.isConformant(FormInput, {
    ignoredTypingsProps: ['label'],
  })
  common.labelImplementsHtmlForProp(FormInput)

  describe('as', () => {
    it('is "FormField" with a Input control', () => {
      expect(
        shallow(<FormInput />)
          .find('FormField')
          .prop('control'),
      ).toBe(Input)
    })
  })
})
