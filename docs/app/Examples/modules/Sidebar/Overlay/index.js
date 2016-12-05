import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const SidebarVariationsExamples = () => (
  <ExampleSection title='Overlay'>
    <ComponentExample
      title='Left Overlay'
      description='Sidebar attached to the left of the pushable container overlayed on the pusher.'
      examplePath='modules/Sidebar/Overlay/SidebarLeftOverlay'
    />
    <ComponentExample
      title='Right Overlay'
      description='Sidebar attached to the right of the pushable container overlayed on the pusher.'
      examplePath='modules/Sidebar/Overlay/SidebarRightOverlay'
    />
    <ComponentExample
      title='Top Overlay'
      description='Sidebar attached to the top of the pushable container overlayed on the pusher.'
      examplePath='modules/Sidebar/Overlay/SidebarTopOverlay'
    />
    <ComponentExample
      title='Bottom Overlay'
      description='Sidebar attached to the bottom of the pushable container overlayed on the pusher.'
      examplePath='modules/Sidebar/Overlay/SidebarBottomOverlay'
    />
  </ExampleSection>
)

export default SidebarVariationsExamples
