import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const SidebarVariationsExamples = () => (
  <ExampleSection title='Overlay'>
    <ComponentExample
      title='Left Overlay'
      description='Sidebar attached to the left of the pushable container overlayed on the pusher.'
      examplePath='modules/Sidebar/Overlay/SidebarExampleLeftOverlay'
    />
    <ComponentExample
      title='Right Overlay'
      description='Sidebar attached to the right of the pushable container overlayed on the pusher.'
      examplePath='modules/Sidebar/Overlay/SidebarExampleRightOverlay'
    />
    <ComponentExample
      title='Top Overlay'
      description='Sidebar attached to the top of the pushable container overlayed on the pusher.'
      examplePath='modules/Sidebar/Overlay/SidebarExampleTopOverlay'
    />
    <ComponentExample
      title='Bottom Overlay'
      description='Sidebar attached to the bottom of the pushable container overlayed on the pusher.'
      examplePath='modules/Sidebar/Overlay/SidebarExampleBottomOverlay'
    />
  </ExampleSection>
)

export default SidebarVariationsExamples
