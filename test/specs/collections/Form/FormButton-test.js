import React from 'react'

import FormButton from 'src/collections/Form/FormButton'
import Button from 'src/elements/Button/Button'
import * as common from 'test/specs/commonTests'

describe('FormButton', () => {
  common.isConformant(FormButton, {
    ignoredTypingsProps: ['label'],
  })
  common.labelImplementsHtmlForProp(FormButton)

  it('renders a FormField with a Button control', () => {
    expect(shallow(<FormButton />).find('FormField')).have.prop('control', Button)
  })
})
