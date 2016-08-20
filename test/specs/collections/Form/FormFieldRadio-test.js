import React from 'react'

import FormRadio from 'src/collections/Form/FormRadio'
import Radio from 'src/addons/Radio/Radio'
import * as common from 'test/specs/commonTests'

describe('FormRadio', () => {
  common.isConformant(FormRadio)

  it('renders a FormField with a Radio control', () => {
    shallow(<FormRadio />)
      .find('FormField')
      .should.have.prop('control', Radio)
  })
})
