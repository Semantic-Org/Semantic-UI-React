import React from 'react'
import { Message } from 'stardust'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const States = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Indeterminate'
      description="A loader can show it's unsure of how long a task will take"
      examplePath='elements/Loader/States/Indeterminate'
    />

    <ComponentExample
      title='Active'
      description='A loader can contain text'
      examplePath='elements/Loader/States/Active'
    >
      <Message info>
        An active dimmer may not be clearly visible without using a "ui dimmer"
      </Message>
    </ComponentExample>

    <ComponentExample
      title='Disabled'
      description='A loader can be disabled or hidden'
      examplePath='elements/Loader/States/Disabled'
    />
  </ExampleSection>
)

export default States
