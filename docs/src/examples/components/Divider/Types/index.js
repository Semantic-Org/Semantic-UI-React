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
      title='Divider with label'
      description='A Divider with a label using children.'
      examplePath='components/Divider/Types/DividerExampleLabel'
    />
  </ExampleSection>
)

export default Types
