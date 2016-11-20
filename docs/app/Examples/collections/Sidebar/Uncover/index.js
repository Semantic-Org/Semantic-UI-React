import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const SidebarVariationsExamples = () => (
  <ExampleSection title='Uncover'>
    <ComponentExample
      title='Left Uncover'
      description='Sidebar attached to the left of the pushable container uncovering by the pusher.'
      examplePath='collections/Sidebar/Uncover/SidebarLeftUncover'
    />
    <ComponentExample
      title='Right Uncover'
      description='Sidebar attached to the right of the pushable container uncovered by the pusher.'
      examplePath='collections/Sidebar/Uncover/SidebarRightUncover'
    />
  </ExampleSection>
)

export default SidebarVariationsExamples
