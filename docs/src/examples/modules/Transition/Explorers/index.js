import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const TransitionExplorersExamples = () => (
  <ExampleSection title='Explorers'>
    <ComponentExample
      title='Directional Animations'
      description={[
        'This explorer animates Transition Group children as they mount and unmount.',
        'Use it to try directional animations that show and hide the element.',
      ].join(' ')}
      examplePath='modules/Transition/Explorers/TransitionExampleGroupExplorer'
    />
    <ComponentExample
      title='Static Animations'
      description={[
        'This explorer animates a single Transition child by toggling the visible prop.',
        'Use it to try unidirectional animations for elements that are always visible.',
      ].join(' ')}
      examplePath='modules/Transition/Explorers/TransitionExampleTransitionExplorer'
    >
      <Message info>
        Trigger static animations just as you trigger directional animations, by
        toggling the <code>visible</code> prop. The value is not significant
        since static animations are unidirectional.
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default TransitionExplorersExamples
