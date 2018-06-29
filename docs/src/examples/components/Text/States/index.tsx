import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const States = () => (
  <ExampleSection title="States">
    <ComponentExample
      title="Disabled"
      description="The disabled state for a Text component."
      examplePath="components/Text/States/TextExampleDisabled"
    />
    <ComponentExample
      title="Error"
      description="The error state for a Text component"
      examplePath="components/Text/States/TextExampleError"
    />
    <ComponentExample
      title="Success"
      description="The success state for a Text component"
      examplePath="components/Text/States/TextExampleSuccess"
    />
  </ExampleSection>
)

export default States
