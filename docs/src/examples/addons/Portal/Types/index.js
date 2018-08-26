import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const PortalTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Portal'
      description='A basic portal.'
      examplePath='addons/Portal/Types/PortalExamplePortal'
    />
    <ComponentExample
      title='Controlled'
      description='A controlled portal.'
      examplePath='addons/Portal/Types/PortalExampleControlled'
    />
  </ExampleSection>
)

export default PortalTypesExamples
