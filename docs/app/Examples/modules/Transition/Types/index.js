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
        <p>An animated component must not unmount unexpectedly or the transition will not run as intended.</p>
        <Message.List>
          <Message.Item>
            If you need to animate children as they mount and unmount, use a <code>Transition.Group</code>. 
          </Message.Item>
          <Message.Item>
            It is paramount that each child of a <code>Transition.Group</code>
            has an unique <code>key</code> prop that stays constant through rerenders.
            In particular, it is likely that <code>keys</code> based on pseudo-random identifiers or simple loop increment variables will lead to unexpected behavior.
          </Message.Item>
          <Message.Item>
            When using the <code>Transition</code> component, you may unmount the animated child when the transition completes by setting the <code>unmountOnHide</code> prop.
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
