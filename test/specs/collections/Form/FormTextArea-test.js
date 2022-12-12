import React from 'react'

import TextArea from 'src/addons/TextArea/TextArea'
import FormTextArea from 'src/collections/Form/FormTextArea'
import * as common from 'test/specs/commonTests'

describe('FormTextArea', () => {
  common.isConformant(FormTextArea)
  common.forwardsRef(FormTextArea, { tagName: 'textarea' })
  common.labelImplementsHtmlForProp(FormTextArea)

  it('renders a FormField with a TextArea control', () => {
    shallow(<FormTextArea />)
      .find('FormField')
      .should.have.prop('control', TextArea)
  })
})
