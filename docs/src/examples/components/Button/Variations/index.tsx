import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Variations = () => (
  <ExampleSection title="Variations">
    <ComponentExample
      title="Circular"
      description="A button can be circular."
      examplePath="components/Button/Variations/ButtonExampleCircular"
    />
    <ComponentExample
      title="Circular Emphasis"
      description="A button can be circular and formatted to show different levels of emphasis."
      examplePath="components/Button/Variations/ButtonExampleEmphasisCircular"
    />
  </ExampleSection>
)

export default Variations
