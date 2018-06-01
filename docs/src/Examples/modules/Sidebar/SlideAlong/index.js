import React from 'react'

import ComponentExample from 'docs/src/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/Components/ComponentDoc/ExampleSection'

const SidebarVariationsExamples = () => (
  <ExampleSection title='Slide Along'>
    <ComponentExample
      title='Left Slide Along'
      description='Sidebar attached to the left of the pushable container sliding along the pusher.'
      examplePath='modules/Sidebar/SlideAlong/SidebarExampleLeftSlideAlong'
    />
    <ComponentExample
      title='Right Slide Along'
      description='Sidebar attached to the right of the pushable container sliding along the pusher.'
      examplePath='modules/Sidebar/SlideAlong/SidebarExampleRightSlideAlong'
    />
  </ExampleSection>
)

export default SidebarVariationsExamples
