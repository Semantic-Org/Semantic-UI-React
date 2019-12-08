import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const TransitionUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Duration'
      description={
        <span>
          Duration of the CSS transition animation can be defined separately for{' '}
          <code>hide</code> and <code>show</code>
          animations.
        </span>
      }
      examplePath='modules/Transition/Usage/TransitionExampleDuration'
    />
  </ExampleSection>
)

export default TransitionUsageExamples
