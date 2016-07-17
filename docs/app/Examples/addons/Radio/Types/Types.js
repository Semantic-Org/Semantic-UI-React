import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const RadioTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Radio'
      description='A radio for checking.'
      examplePath='addons/Radio/Types/Radio'
    />
    <ComponentExample
      title='Toggle'
      description='A radio can toggle.'
      examplePath='addons/Radio/Types/Toggle'
    />
    <ComponentExample
      title='Slider'
      description='A radio can look like a slider.'
      examplePath='addons/Radio/Types/Slider'
    />
    <ComponentExample
      title='Radio Group'
      description='Radios can be part of a group.'
      examplePath='addons/Radio/Types/RadioGroup'
    />
  </ExampleSection>
)

export default RadioTypesExamples
