import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const States = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Active'
      description='An active dimmer will dim its parent container'
      examplePath='modules/Dimmer/States/Active'
    />
  </ExampleSection>
)

export default States
