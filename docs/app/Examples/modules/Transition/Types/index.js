import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const TransitionTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Transition'
      description='A transition can be applied to single item.'
      examplePath='modules/Transition/Types/TransitionExampleTransition'
    />
    <ComponentExample
      title='Transition Group'
      description='A transition can be applied to items group.'
      examplePath='modules/Transition/Types/TransitionExampleGroup'
    />
  </ExampleSection>
)

export default TransitionTypesExamples
