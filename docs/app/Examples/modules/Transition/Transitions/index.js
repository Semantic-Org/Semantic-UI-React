import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const TransitionTransitionsExamples = () => (
  <div>
    <ExampleSection title='Transitions'>
      <ComponentExample
        title='Scale'
        description='An element can scale into or out of view.'
        examplePath='modules/Transition/Transitions/TransitionExampleScale'
      />
    </ExampleSection>
    <ExampleSection title='Usage'>
      <ComponentExample
        title='Explorer'
        examplePath='modules/Transition/Transitions/TransitionExampleExplorer'
      />
    </ExampleSection>
  </div>
)

export default TransitionTransitionsExamples
