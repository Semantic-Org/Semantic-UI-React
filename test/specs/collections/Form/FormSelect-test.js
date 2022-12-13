import React from 'react'

import Select from 'src/addons/Select/Select'
import FormSelect from 'src/collections/Form/FormSelect'
import * as common from 'test/specs/commonTests'

const requiredProps = {
  options: [],
}

describe('FormSelect', () => {
  common.isConformant(FormSelect, { requiredProps, ignoredTypingsProps: ['error'] })
  common.labelImplementsHtmlForProp(FormSelect, { requiredProps })
  common.forwardsRef(FormSelect)

  it('renders a FormField with a Select control', () => {
    shallow(<FormSelect {...requiredProps} />)
      .find('FormField')
      .should.have.prop('control', Select)
  })
})
