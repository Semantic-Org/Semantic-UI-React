import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ContributionPrompt from 'docs/app/Components/ComponentDoc/ContributionPrompt'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const DatetimeContentExamples = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Using custom Date and Time formatters'
      description='A date time component can use custom date and time formatting functions.'
      examplePath='modules/Datetime/Content/DateTimeExampleFormatters'
    />
  </ExampleSection>
)

export default DatetimeContentExamples
