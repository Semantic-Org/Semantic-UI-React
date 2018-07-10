import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ShorthandExample from 'docs/src/components/ComponentDoc/ShorthandExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Types = () => (
  <ExampleSection title="Types">
    <ComponentExample
      title="Menu"
      description="A menu."
      examplePath="components/Menu/Types/MenuExample"
    />
    <ShorthandExample examplePath="components/Menu/Types/MenuExampleShorthand" />
    <ComponentExample
      description="Menu item text can be defined with the content prop."
      examplePath="components/Menu/Types/MenuExampleContent"
    />
    <ComponentExample
      title="Secondary Menu"
      description="A menu can adjust its appearance to de-emphasize its contents."
      examplePath="components/Menu/Types/MenuExampleSecondary"
    />
    <ComponentExample
      title="Pointing"
      description="A menu can point to show its relationship to nearby content."
      examplePath="components/Menu/Types/MenuExamplePointing"
    />
    <ComponentExample examplePath="components/Menu/Types/MenuExampleSecondaryPointing" />
  </ExampleSection>
)

export default Types
