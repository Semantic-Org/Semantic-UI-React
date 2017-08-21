import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const DatetimeContentExamples = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Using custom Date and Time formatters'
      description='A date time component can use custom date and time formatting functions.'
      examplePath='modules/Datetime/Content/DatetimeExampleFormatters'
    />
    <ComponentExample
      title='Time only with forced 24H format'
      description='A full Time selector, where the time display is set to US locale but forced into a 24 hour clock'
      examplePath='modules/Datetime/Content/Time24HourExample'
    />
  </ExampleSection>
)

export default DatetimeContentExamples
