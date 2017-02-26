import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ContributionPrompt from 'docs/app/Components/ComponentDoc/ContributionPrompt'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import Datetime from 'src/modules/Datetime/Datetime'

const DatetimeTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Date and Time'
      description='A full Date and Time selector'
      examplePath='modules/Datetime/Types/DateTimeExampleFull'
    />
    <ComponentExample
      title='Date'
      description='A date only Date selector'
      examplePath='modules/Datetime/Types/DateTimeExampleDateOnly'
    />
    
  </ExampleSection>


)

export default DatetimeTypesExamples;
