import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const DatetimeTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Date'
      description='A date only Date selector'
      examplePath='addons/Datetime/Types/DatetimeExampleDateOnly'
    />
    <ComponentExample
      title='First Day Of Week'
      description='Set the first day of the week to either Monday or Sunday'
      examplePath='addons/Datetime/Types/DatetimeExampleFirstWeekDay'
    />
    <ComponentExample
      title='Time'
      description='A full Time selector, with initial value of the current time'
      examplePath='addons/Datetime/Types/TimeExampleFull'
    />
    <ComponentExample
      title='Date and Time'
      description='A full Date and Time selector, with initial value of the current date and time'
      examplePath='addons/Datetime/Types/DatetimeExampleFull'
    />
    <ComponentExample
      title='Range'
      description='A date range selector'
      examplePath='addons/Datetime/Types/DateRangeExample'
    />
  </ExampleSection>
)

export default DatetimeTypesExamples
