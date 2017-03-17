import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const SidebarVariationsExamples = () => (
  <ExampleSection title='Closable'>
    <ComponentExample
      title='Closable property'
      description='Sidebar width closable prop closes when clicking outside of it.'
      examplePath='modules/Sidebar/Closable/SidebarExampleClosable'
    />
  </ExampleSection>
)

export default SidebarVariationsExamples
