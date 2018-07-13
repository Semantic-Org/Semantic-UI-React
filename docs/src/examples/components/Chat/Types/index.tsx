import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Types = () => (
  <ExampleSection title="Types">
    <ComponentExample
      title="Default"
      description="A default Chat."
      examplePath="components/Chat/Types/ChatExample"
    />
    <ComponentExample
      title="Shorthand"
      description="Chat messages can be defined with shorthand."
      examplePath="components/Chat/Types/ChatExample"
    />
  </ExampleSection>
)

export default Types
