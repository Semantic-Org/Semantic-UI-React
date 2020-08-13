import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const ModalTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Modal'
      description='A standard modal.'
      examplePath='modules/Modal/Types/ModalExampleModal'
    />
    <ComponentExample
      title='Basic'
      description='A modal can reduce its complexity.'
      examplePath='modules/Modal/Types/ModalExampleBasic'
    />
    <ComponentExample
      title='Shorthand'
      description='A modal can be created with shorthand props.'
      examplePath='modules/Modal/Types/ModalExampleShorthand'
    >
      <Message
        compact
        content='Shorthand API usage can be more simple as it handles the state of component internally.'
        info
      />
    </ComponentExample>
  </ExampleSection>
)

export default ModalTypesExamples
