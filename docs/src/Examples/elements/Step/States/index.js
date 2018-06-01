import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const States = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Active'
      description='A step can be highlighted as active.'
      examplePath='elements/Step/States/StepExampleActive'
    />

    <ComponentExample
      title='Completed'
      description='A step can show that a user has completed it.'
      examplePath='elements/Step/States/StepExampleCompleted'
    />
    <ComponentExample
      description='A step can show that a user has completed it when its group is ordered.'
      examplePath='elements/Step/States/StepExampleCompletedOrdered'
    />

    <ComponentExample
      title='Disabled'
      description='A step can show that it cannot be selected.'
      examplePath='elements/Step/States/StepExampleDisabled'
    />
  </ExampleSection>
)

export default States
