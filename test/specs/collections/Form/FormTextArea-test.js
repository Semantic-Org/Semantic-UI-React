import React from 'react'

import TextArea from 'src/addons/TextArea/TextArea'
import FormTextArea from 'src/collections/Form/FormTextArea'
import * as common from 'test/specs/commonTests'

describe('FormTextArea', () => {
  common.isConformant(FormTextArea)
  common.labelImplementsHtmlForProp(FormTextArea)

  it('renders a FormField with a TextArea control', () => {
    expect(shallow(<FormTextArea />).find('FormField')).have.prop('control', TextArea)
  })
})
