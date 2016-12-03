import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const SidebarVariationsExamples = () => (
  <ExampleSection title='Slide Along'>
    <ComponentExample
      title='Left Slide Along'
      description='Sidebar attached to the left of the pushable container sliding along the pusher.'
      examplePath='collections/Sidebar/SlideAlong/SidebarLeftSlideAlong'
    />
    <ComponentExample
      title='Right Slide Along'
      description='Sidebar attached to the right of the pushable container sliding along the pusher.'
      examplePath='collections/Sidebar/SlideAlong/SidebarRightSlideAlong'
    />
  </ExampleSection>
)

export default SidebarVariationsExamples
