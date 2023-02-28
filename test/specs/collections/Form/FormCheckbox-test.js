import React from 'react'

import FormCheckbox from 'src/collections/Form/FormCheckbox'
import Checkbox from 'src/modules/Checkbox/Checkbox'
import * as common from 'test/specs/commonTests'

describe('FormCheckbox', () => {
  common.isConformant(FormCheckbox, {
    ignoredTypingsProps: ['type'],
  })

  it('renders a FormField with a Checkbox control', () => {
    shallow(<FormCheckbox />)
      .find('FormField')
      .should.have.prop('control', Checkbox)
  })

  common.forwardsRef(FormCheckbox, { tagName: 'input' })
})
