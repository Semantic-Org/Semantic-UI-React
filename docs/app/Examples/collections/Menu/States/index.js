import React from 'react'

import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'

const States = () => {
  return (
    <ExampleSection title='States'>
      <ComponentExample
        title='Hover'
        description='A menu item can be hovered'
        examplePath='collections/Menu/States/Hover'
      />

      <ComponentExample
        title='Active'
        description='A menu item can be active'
        examplePath='collections/Menu/States/Active'
      />
    </ExampleSection>
  )
}

export default States
