import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const DatetimeStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Calendar with disabled days'
      description={[
        'A calendar can specify a set of disabled dates.',
        'This example has today, yesterday and tomorrow disabled.',
      ].join(' ')}
      examplePath='modules/Datetime/States/DateTimeExampleDisabledDays'
    />
    <ComponentExample
      title='Error'
      description='A calendar can show an error state'
      examplePath='modules/Datetime/States/DateTimeExampleError'
    />
    <ComponentExample
      title='Disabled'
      description='A calendar can be disabled'
      examplePath='modules/Datetime/States/DateTimeExampleDisabled'
    />
  </ExampleSection>
)

export default DatetimeStatesExamples
