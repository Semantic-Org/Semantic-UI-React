import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const ModalUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Callbacks'
      description='A Modal provides callbacks to manage its state.'
      examplePath='modules/Modal/Usage/ModalExampleCallbacks'
    />
    <ComponentExample
      title='Close Config'
      description='A Modal can config not to close by escape or dimmer click.'
      examplePath='modules/Modal/Usage/ModalExampleCloseConfig'
    />
    <ComponentExample
      title='Multiple Modals'
      description='Multiple modals can be displayed on top of one another.'
      examplePath='modules/Modal/Usage/ModalExampleMultiple'
    />
  </ExampleSection>
)

export default ModalUsageExamples
