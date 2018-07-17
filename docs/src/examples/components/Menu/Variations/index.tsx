import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Variations = () => (
  <ExampleSection title="Variations">
    <ComponentExample
      title="Pills"
      description="A menu can adjust its appearance to de-emphasize its contents."
      examplePath="components/Menu/Variations/MenuExamplePills"
    />
    <ComponentExample
      title="Pills Primary"
      description="A menu can adjust its appearance to de-emphasize its contents."
      examplePath="components/Menu/Variations/MenuExamplePillsPrimary"
    />
    <ComponentExample
      title="Pointing"
      description="A menu can point to show its relationship to nearby content."
      examplePath="components/Menu/Variations/MenuExamplePointing"
    />
    <ComponentExample
      title="Pointing Primary"
      description="A menu can point to show its relationship to nearby content."
      examplePath="components/Menu/Variations/MenuExamplePointingPrimary"
    />
    <ComponentExample
      title="Underlined"
      description="A menu can underline the active element."
      examplePath="components/Menu/Variations/MenuExampleUnderlined"
    />
    <ComponentExample
      title="Underlined primary"
      description="A menu can underline the active element."
      examplePath="components/Menu/Variations/MenuExampleUnderlinedPrimary"
    />
  </ExampleSection>
)

export default Variations
