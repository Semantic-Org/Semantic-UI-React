import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Types = () => (
  <ExampleSection title="Types">
    <ComponentExample
      title="Default"
      description="A default Button."
      examplePath="components/Button/Types/ButtonExample"
    />
    <ComponentExample
      title="Emphasis"
      description="A button can be formatted to show different levels of emphasis."
      examplePath="components/Button/Types/ButtonExampleEmphasis"
    />
  </ExampleSection>
)

export default Types
