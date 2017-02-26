import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const DatetimeStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Error'
      description='A dropdown can show an error state'
      examplePath='modules/Datetime/States/DateTimeExampleError'
    />
    <ComponentExample
      title='Disabled'
      description='A dropdown can be disabled'
      examplePath='modules/Datetime/States/DateTimeExampleDisabled'
    />
  </ExampleSection>
)

export default DatetimeStatesExamples;
