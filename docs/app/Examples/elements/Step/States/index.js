import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const States = () => (
  <ExampleSection title='Groups'>
    <ExampleSection title='States'>
      <ComponentExample
        title='Active'
        description='A step can be highlighted as active.'
        examplePath='elements/Step/States/Active'
      />

      <ComponentExample
        title='Completed'
        description='A step can show that a user has completed it.'
        examplePath='elements/Step/States/Completed'
      />

      <ComponentExample
        title='Disabled'
        description='A step can show that it cannot be selected.'
        examplePath='elements/Step/States/Disabled'
      />
    </ExampleSection>
  </ExampleSection>
)

export default States
