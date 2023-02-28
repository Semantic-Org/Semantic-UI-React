import React from 'react'

import Radio from 'src/addons/Radio/Radio'
import FormRadio from 'src/collections/Form/FormRadio'
import * as common from 'test/specs/commonTests'

describe('FormRadio', () => {
  common.isConformant(FormRadio, {
    ignoredTypingsProps: ['type'],
  })
  common.forwardsRef(FormRadio, { tagName: 'input' })

  it('renders a FormField with a Radio control', () => {
    shallow(<FormRadio />)
      .find('FormField')
      .should.have.prop('control', Radio)
  })
})
