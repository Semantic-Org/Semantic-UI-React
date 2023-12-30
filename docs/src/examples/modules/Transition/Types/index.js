import React from 'react'
import { MessageItem, MessageList, Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const TransitionTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Transition'
      description='A Transition animates a single child by toggling the visible prop.'
      examplePath='modules/Transition/Types/TransitionExampleTransition'
    >
      <Message warning>
        <p>Do not unmount a Transition child or else it cannot be animated.</p>
        <MessageList>
          <MessageItem>
            Use the <code>unmountOnHide</code> prop to unmount the child after
            the animation exits.
          </MessageItem>
          <MessageItem>
            Use a <code>TransitionGroup</code> to animate children as they mount
            and unmount.
          </MessageItem>
        </MessageList>
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
