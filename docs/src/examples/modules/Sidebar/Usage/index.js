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
    <ComponentExample
      title='Target'
      description='A sidebar can handle clicks on the passed element.'
      examplePath='modules/Sidebar/Usage/SidebarExampleTarget'
    />
  </ExampleSection>
)

export default SidebarUsageExamples
