import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const SidebarVariationsExamples = () => (
  <ExampleSection title='Slide Out'>
    <ComponentExample
      title='Left Slide Out'
      description='Sidebar attached to the left of the pushable container sliding out from the pusher.'
      examplePath='modules/Sidebar/SlideOut/SidebarExampleLeftSlideOut'
    />
    <ComponentExample
      title='Right Slide Out'
      description='Sidebar attached to the right of the pushable container sliding out from the pusher.'
      examplePath='modules/Sidebar/SlideOut/SidebarExampleRightSlideOut'
    />
  </ExampleSection>
)

export default SidebarVariationsExamples
