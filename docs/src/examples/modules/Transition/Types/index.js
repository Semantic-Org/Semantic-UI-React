import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const TransitionTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Transition'
      description='A Transition animates a single child by toggling the the visible prop.'
      examplePath='modules/Transition/Types/TransitionExampleTransition'
    >
      <Message warning>
        <p>Do not unmount a Transition child or else it cannot be animated.</p>
        <Message.List>
          <Message.Item>
            Use the <code>unmountOnHide</code> prop to unmount the child after the animation exits.
          </Message.Item>
          <Message.Item>
            Use a <code>Transition.Group</code> to animate children as they mount and unmount.
          </Message.Item>
        </Message.List>
      </Message>
    </ComponentExample>
    <ComponentExample
      title='Transition Group'
      description='A Transition Group animates children as they mount and unmount.'
      examplePath='modules/Transition/Types/TransitionExampleGroup'
    />
  </ExampleSection>
)

export default TransitionTypesExamples
