import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const SidebarStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Visible'
      description='A sidebar can be visible on the page.'
      examplePath='modules/Sidebar/States/SidebarExampleVisible'
    />
    <ComponentExample
      title='Dimmed'
      description='A pusher can be dimmed.'
      examplePath='modules/Sidebar/States/SidebarExampleDimmed'
    />
  </ExampleSection>
)

export default SidebarStatesExamples
