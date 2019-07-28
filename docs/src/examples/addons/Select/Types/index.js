import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const SelectTypeExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Simple Select'
      description='Default Select.'
      examplePath='addons/Select/Types/SelectExample'
    />

    <ComponentExample
      title='Select for complex data'
      description='Select which can consume other types of data'
      examplePath='addons/Select/Types/SelectComplexDataExample'
    />
  </ExampleSection>
)

export default SelectTypeExamples
