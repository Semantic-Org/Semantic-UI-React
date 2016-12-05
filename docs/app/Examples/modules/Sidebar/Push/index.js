import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const SidebarVariationsExamples = () => (
  <ExampleSection title='Push'>
    <ComponentExample
      title='Left Push'
      description='Sidebar attached to the left of the pushable container pushing the pusher.'
      examplePath='modules/Sidebar/Push/SidebarLeftPush'
    />
    <ComponentExample
      title='Right Push'
      description='Sidebar attached to the right of the pushable container pushing the pusher.'
      examplePath='modules/Sidebar/Push/SidebarRightPush'
    />
    <ComponentExample
      title='Top Push'
      description='Sidebar attached to the top of the pushable container pushing the pusher.'
      examplePath='modules/Sidebar/Push/SidebarTopPush'
    />
    <ComponentExample
      title='Bottom Push'
      description='Sidebar attached to the bottom of the pushable container pushing the pusher.'
      examplePath='modules/Sidebar/Push/SidebarBottomPush'
    />
  </ExampleSection>
)

export default SidebarVariationsExamples
