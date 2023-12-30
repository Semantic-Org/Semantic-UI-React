import React from 'react'
import { MessageHeader, MessageContent, Icon, Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ShorthandExample from 'docs/src/components/ComponentDoc/ShorthandExample'

const StepGroupsExamples = () => (
  <ExampleSection title='Groups'>
    <ComponentExample
      title='Steps'
      description='A set of steps.'
      examplePath='elements/Step/Groups/StepExampleGroup'
    >
      <Message positive icon>
        <Icon name='mobile' />
        <MessageContent>
          <MessageHeader>Responsive Element</MessageHeader>
          Steps will automatically stack on mobile. To make steps automatically
          stack for tablet use the <code>stackable='tablet'</code> variation.
        </MessageContent>
      </Message>
    </ComponentExample>
    <ShorthandExample examplePath='elements/Step/Groups/StepExampleGroupShorthand' />

    <ComponentExample
      title='Ordered'
      description='A step can show a ordered sequence of steps.'
      examplePath='elements/Step/Groups/StepExampleOrdered'
    />

    <ComponentExample
      title='Vertical'
      description='A step can be displayed stacked vertically.'
      examplePath='elements/Step/Groups/StepExampleVertical'
    />
  </ExampleSection>
)

export default StepGroupsExamples
