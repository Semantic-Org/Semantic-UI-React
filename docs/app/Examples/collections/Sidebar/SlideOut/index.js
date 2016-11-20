import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const SidebarVariationsExamples = () => (
  <ExampleSection title='Slide Out'>
    <ComponentExample
      title='Left Slide Out'
      description='Sidebar attached to the left of the pushable container sliding out from the pusher.'
      examplePath='collections/Sidebar/SlideOut/SidebarLeftSlideOut'
    />
    <ComponentExample
      title='Right Slide Out'
      description='Sidebar attached to the right of the pushable container sliding out from the pusher.'
      examplePath='collections/Sidebar/SlideOut/SidebarRightSlideOut'
    />
  </ExampleSection>
)

export default SidebarVariationsExamples
