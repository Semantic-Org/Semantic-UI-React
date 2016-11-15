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
      <ComponentExample
        title='Fade'
        description='An element can fade into or out of view descending and ascending.'
        examplePath='modules/Transition/Transitions/TransitionExampleFade'
      />
      <ComponentExample
        title='Flip'
        description='An element can flip into or out of view vertically or horizontally.'
        examplePath='modules/Transition/Transitions/TransitionExampleFlip'
      />
      <ComponentExample
        title='Drop'
        description='An element can drop into view from above.'
        examplePath='modules/Transition/Transitions/TransitionExampleDrop'
      />
    </ExampleSection>
  </div>
)

export default TransitionTransitionsExamples
