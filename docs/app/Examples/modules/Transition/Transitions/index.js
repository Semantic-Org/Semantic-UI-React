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
      <ComponentExample
        title='Fly'
        description='An element can fly in from off canvas.'
        examplePath='modules/Transition/Transitions/TransitionExampleFly'
      />
      <ComponentExample
        title='Swing'
        description='An element can swing into view.'
        examplePath='modules/Transition/Transitions/TransitionExampleSwing'
      />
      <ComponentExample
        title='Browse'
        description='An element can appear and disappear as part of a series.'
        examplePath='modules/Transition/Transitions/TransitionExampleBrowse'
      />
      <ComponentExample
        title='Slide'
        description='An element can appear to slide in from above or below.'
        examplePath='modules/Transition/Transitions/TransitionExampleSlide'
      />
    </ExampleSection>
  </div>
)

export default TransitionTransitionsExamples
