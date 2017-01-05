import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const TextAreaTypesExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='TextArea'
      description='A default TextArea.'
      examplePath='addons/TextArea/Usage/TextAreaExample'
    />
    <ComponentExample
      title='Auto Height'
      description='A TextArea can adjust its height to fit its contents.'
      examplePath='addons/TextArea/Usage/TextAreaExampleAutoHeight'
    />
  </ExampleSection>
)

export default TextAreaTypesExamples
