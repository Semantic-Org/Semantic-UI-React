import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const SidebarUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Callbacks'
      description='A sidebar can have callbacks.'
      examplePath='modules/Sidebar/Usage/SidebarExampleCallback'
    />
  </ExampleSection>
)

export default SidebarUsageExamples
