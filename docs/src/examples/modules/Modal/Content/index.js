import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const ModalContentExamples = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Close icon'
      description='A Modal can have a close icon.'
      examplePath='modules/Modal/Content/ModalExampleCloseIcon'
    />
    <ComponentExample
      title='Image Content'
      description='A modal can contain image content.'
      examplePath='modules/Modal/Content/ModalExampleContentImage'
    />
    <ComponentExample
      title='Dimmer'
      description='A modal can specify dimmer variations.'
      examplePath='modules/Modal/Content/ModalExampleDimmer'
    />
  </ExampleSection>
)

export default ModalContentExamples
