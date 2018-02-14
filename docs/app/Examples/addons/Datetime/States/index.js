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
      examplePath='addons/Datetime/States/DatetimeExampleDisabledDays'
    />
    <ComponentExample
      title='Error'
      description='A calendar can show an error state'
      examplePath='addons/Datetime/States/DatetimeExampleError'
    />
    <ComponentExample
      title='Disabled'
      description='A calendar can be disabled'
      examplePath='addons/Datetime/States/DatetimeExampleDisabled'
    />
  </ExampleSection>
)

export default DatetimeStatesExamples
