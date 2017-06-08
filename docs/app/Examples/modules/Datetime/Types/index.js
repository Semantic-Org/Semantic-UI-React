import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ContributionPrompt from 'docs/app/Components/ComponentDoc/ContributionPrompt'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import Datetime from 'src/modules/Datetime/Datetime'

const DatetimeTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Date and Time'
      description='A full Date and Time selector, with initial value of the current date and time'
      examplePath='modules/Datetime/Types/DateTimeExampleFull'
    />
    <ComponentExample
      title='Date'
      description='A date only Date selector'
      examplePath='modules/Datetime/Types/DateTimeExampleDateOnly'
    />
    <ComponentExample
      title='First Day Of Week'
      description='Set the first day of the week to either Monday or Sunday'
      examplePath='modules/Datetime/Types/DateTimeExampleFirstWeekDay'
    />
    <ComponentExample
      title='Time'
      description='A full Time selector, with initial value of the current time'
      examplePath='modules/Datetime/Types/TimeExampleFull'
    />
    <ComponentExample
      title='Range'
      description='A date range selector'
      examplePath='modules/Datetime/Types/DateRangeExample'
    />
  </ExampleSection>


)

export default DatetimeTypesExamples
