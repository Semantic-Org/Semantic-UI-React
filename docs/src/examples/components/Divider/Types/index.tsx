import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Types = () => (
  <ExampleSection title="Types">
    <ComponentExample
      title="Default"
      description="A default Divider."
      examplePath="components/Divider/Types/DividerExample"
    />
    <ComponentExample
      title="Divider with content"
      description="A Divider can contain text or other content displayed alongside with the line."
      examplePath="components/Divider/Types/DividerExampleContent"
    />
    <ComponentExample
      title="Primary divider"
      description="A primary Divider catches the user's attention."
      examplePath="components/Divider/Types/DividerExamplePrimary"
    />
    <ComponentExample
      title="Secondary divider"
      description="A secondary Divider is more subtle and less noticeable."
      examplePath="components/Divider/Types/DividerExampleSecondary"
    />
  </ExampleSection>
)

export default Types
