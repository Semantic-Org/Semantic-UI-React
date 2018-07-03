import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Types = () => (
  <ExampleSection title="Types">
    <ComponentExample
      title="Layout"
      description="A layout arranges content into areas."
      examplePath="components/Layout/Types/LayoutExample"
    />
    <ComponentExample
      title="Vertical"
      description="A layout can display its areas vertically."
      examplePath="components/Layout/Types/LayoutExampleVertical"
    />
  </ExampleSection>
)

export default Types
