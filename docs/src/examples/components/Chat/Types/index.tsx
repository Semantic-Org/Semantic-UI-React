import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ShorthandExample from 'docs/src/components/ComponentDoc/ShorthandExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Types = () => (
  <ExampleSection title="Types">
    <ComponentExample
      title="Default"
      description="A default Chat."
      examplePath="components/Chat/Types/ChatExample"
    />
    <ShorthandExample
      title="Shorthand"
      description="Chat messages can be defined with shorthand."
      examplePath="components/Chat/Types/ChatExampleShorthand"
    />
  </ExampleSection>
)

export default Types
