import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ContributionPrompt from 'docs/app/Components/ComponentDoc/ContributionPrompt'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import Datetime from 'src/modules/Datetime/Datetime'

const DatetimeTypesExamples = () => (
  <ExampleSection title='Types'>
      <Datetime
          defaultOpen={false}
      />
  </ExampleSection>
)

export default DatetimeTypesExamples;
