import React from 'react'

import ComponentExample from 'docs/src/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/Components/ComponentDoc/ExampleSection'
import ShorthandExample from 'docs/src/Components/ComponentDoc/ShorthandExample'

const StepTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Step'
      description='A single step.'
      examplePath='elements/Step/Types/StepExampleStep'
    />
    <ShorthandExample examplePath='elements/Step/Types/StepExampleStepShorthand' />
  </ExampleSection>
)

export default StepTypesExamples
