import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const TransitionTypesExamples = () => (
  <ExampleSection title='Explorers'>
    <ComponentExample
      title='Single item'
      description='You can apply different animations and duration with a transition explorer.'
      examplePath='modules/Transition/Explorers/TransitionExampleSingleExplorer'
    />
    <ComponentExample
      title='Static animations'
      description={[
        'You can apply different static animations and duration with a transition explorer.',
        'There are no special API for static animations at now.',
      ].join(' ')}
      examplePath='modules/Transition/Explorers/TransitionExampleStaticExplorer'
    />
  </ExampleSection>
)

export default TransitionTypesExamples
