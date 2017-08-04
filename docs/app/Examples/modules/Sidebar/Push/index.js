import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const SidebarVariationsExamples = () => (
  <ExampleSection title='Push'>
    <ComponentExample
      title='Left Push'
      description='Sidebar attached to the left of the pushable container pushing the pusher.'
      examplePath='modules/Sidebar/Push/SidebarExampleLeftPush'
    />
    <ComponentExample
      title='Right Push'
      description='Sidebar attached to the right of the pushable container pushing the pusher.'
      examplePath='modules/Sidebar/Push/SidebarExampleRightPush'
    />
    <ComponentExample
      title='Top Push'
      description='Sidebar attached to the top of the pushable container pushing the pusher.'
      examplePath='modules/Sidebar/Push/SidebarExampleTopPush'
    />
    <ComponentExample
      title='Bottom Push'
      description='Sidebar attached to the bottom of the pushable container pushing the pusher.'
      examplePath='modules/Sidebar/Push/SidebarExampleBottomPush'
    />
  </ExampleSection>
)

export default SidebarVariationsExamples
