import React from 'react'

import FormInput from 'src/collections/Form/FormInput'
import Input from 'src/elements/Input/Input'
import * as common from 'test/specs/commonTests'

describe('FormInput', () => {
  common.isConformant(FormInput, {
    ignoredTypingsProps: ['label', 'error'],
  })
  common.labelImplementsHtmlForProp(FormInput)

  it('renders a FormField with a Input control', () => {
    shallow(<FormInput />)
      .find('FormField')
      .should.have.prop('control', Input)
  })
})
