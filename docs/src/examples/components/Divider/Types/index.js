import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Types = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Default'
      description='A default Divider.'
      examplePath='components/Divider/Types/DividerExample'
    />
    <ComponentExample
      title='Divider with children'
      description='A Divider can contain children.'
      examplePath='components/Divider/Types/DividerExampleChildren'
    />
  </ExampleSection>
)

export default Types
