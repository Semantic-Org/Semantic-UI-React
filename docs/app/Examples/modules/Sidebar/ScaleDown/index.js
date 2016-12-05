import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const SidebarVariationsExamples = () => (
  <ExampleSection title='Scale Down'>
    <ComponentExample
      title='Left Scale Down'
      description='Sidebar attached to the left of the pushable container scaling down the pusher.'
      examplePath='modules/Sidebar/ScaleDown/SidebarLeftScaleDown'
    />
    <ComponentExample
      title='Right Scale Down'
      description='Sidebar attached to the right of the pushable container scaling down the pusher.'
      examplePath='modules/Sidebar/ScaleDown/SidebarRightScaleDown'
    />
    <ComponentExample
      title='Top Scale Down'
      description='Sidebar attached to the top of the pushable container scaling down the pusher.'
      examplePath='modules/Sidebar/ScaleDown/SidebarTopScaleDown'
    />
    <ComponentExample
      title='Bottom Scale Down'
      description='Sidebar attached to the bottom of the pushable container scaling down the pusher.'
      examplePath='modules/Sidebar/ScaleDown/SidebarBottomScaleDown'
    />
  </ExampleSection>
)

export default SidebarVariationsExamples
