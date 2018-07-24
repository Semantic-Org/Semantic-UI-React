import React from 'react'

import FormButton from 'src/collections/Form/FormButton'
import Button from 'src/elements/Button/Button'
import * as common from 'test/specs/commonTests'

describe('FormButton', () => {
  common.isConformant(FormButton, {
    ignoredTypingsProps: ['label'],
  })
  common.labelImplementsHtmlForProp(FormButton)

  describe('as', () => {
    it('is "FormField" with a Button control', () => {
      expect(
        shallow(<FormButton />)
          .find('FormField')
          .prop('control'),
      ).toBe(Button)
    })
  })
})
