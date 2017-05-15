import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const InputUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Focus'
      description='An input can be focused via a ref.'
      examplePath='elements/Input/Usage/InputExampleRefFocus'
    />
  </ExampleSection>
)

export default InputUsageExamples
