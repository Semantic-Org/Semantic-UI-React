import React from 'react'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

const MessageStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Hidden'
      description='A message can be hidden.'
      examplePath='collections/Message/States/MessageExampleHidden'
    />
    <ComponentExample
      title='Visible'
      description='A message can be set to visible to force itself to be shown.'
      examplePath='collections/Message/States/MessageExampleVisible'
    />
  </ExampleSection>
)

export default MessageStatesExamples
