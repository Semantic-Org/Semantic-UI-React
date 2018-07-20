import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Variations = () => (
  <ExampleSection title="Variations">
    <ComponentExample
      title="@ mention"
      description="A Text component for @ mentions."
      examplePath="components/Text/Variations/TextExampleAtMention"
    />
    <ComponentExample
      title="Timestamp"
      description="A Text component for timestamps."
      examplePath="components/Text/Variations/TextExampleTimestamp"
    />
    <ComponentExample
      title="Important"
      description="A text can appear more important and draw user's attention."
      examplePath="components/Text/Variations/TextExampleImportant"
    />
  </ExampleSection>
)

export default Variations
