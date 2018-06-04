import React from 'react'

import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

const States = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Hover'
      description='A menu item can be hovered.'
      examplePath='collections/Menu/States/MenuExampleHover'
    />

    <ComponentExample
      title='Active'
      description='A menu item can be active.'
      examplePath='collections/Menu/States/MenuExampleActive'
    />

    <ComponentExample
      title='Disabled'
      description='A menu item can be disabled.'
      examplePath='collections/Menu/States/MenuExampleDisabled'
    />
  </ExampleSection>
)

export default States
