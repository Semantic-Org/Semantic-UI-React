import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const ButtonContentExamples = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Conditionals'
      description='Button groups can contain conditionals.'
      examplePath='elements/Button/Content/ButtonExampleConditionals'
    />
    <ComponentExample
      examplePath='elements/Button/Content/ButtonExampleMultipleConditionals'
    />
  </ExampleSection>
)

export default ButtonContentExamples
