import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const ReactDatepickerTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Date'
      description='A date picker'
      examplePath='externals/ReactDatepicker/Types/ReactDatepickerExampleDate'
    />
    <ComponentExample
      title='Time'
      description='A time picker'
      examplePath='externals/ReactDatepicker/Types/ReactDatepickerExampleTime'
    />
    <ComponentExample
      title='Date & time'
      description='A date & time picker'
      examplePath='externals/ReactDatepicker/Types/ReactDatepickerExampleDateTime'
    />
    <ComponentExample
      title='Date range'
      description='A date range picker'
      examplePath='externals/ReactDatepicker/Types/ReactDatepickerExampleDateRange'
    />
  </ExampleSection>
)

export default ReactDatepickerTypesExamples
