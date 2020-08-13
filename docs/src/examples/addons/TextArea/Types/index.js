import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const TextAreaTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='TextArea'
      description='A default TextArea.'
      examplePath='addons/TextArea/Types/TextAreaExampleTextArea'
    >
      <Message info>
        You should always wrap a <code>Textarea</code> with a <code>Form</code>{' '}
        component to get styles applied because Semantic UI applies styles for{' '}
        <code>.ui.form textarea</code>.
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default TextAreaTypesExamples
