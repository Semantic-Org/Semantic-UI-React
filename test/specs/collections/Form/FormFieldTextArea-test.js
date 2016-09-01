import React from 'react'

import FormTextArea from 'src/collections/Form/FormTextArea'
import TextArea from 'src/addons/TextArea/TextArea'
import * as common from 'test/specs/commonTests'

describe('FormTextArea', () => {
  common.isConformant(FormTextArea)

  it('renders a FormField with a TextArea control', () => {
    shallow(<FormTextArea />)
      .find('FormField')
      .should.have.prop('control', TextArea)
  })
})
