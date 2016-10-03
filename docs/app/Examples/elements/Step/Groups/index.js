import React from 'react'
import { Icon, Message } from 'semantic-ui-react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const Groups = () => (
  <ExampleSection title='Groups'>
    <ComponentExample
      title='Steps'
      description='A set of steps.'
      examplePath='elements/Step/Groups/Groups'
    >
      <Message positive icon>
        <Icon name='mobile' />
        <Message.Content>
          <Message.Header>Responsive Element</Message.Header>
          Steps will automatically stack on mobile.
          To make steps automatically stack for tablet use the <code>stackable='tablet'</code> variation.
        </Message.Content>
      </Message>
    </ComponentExample>

    <ComponentExample
      title='Ordered'
      description='A step can show a ordered sequence of steps.'
      examplePath='elements/Step/Groups/Ordered'
    />

    <ComponentExample
      title='Vertical'
      description='A step can be displayed stacked vertically.'
      examplePath='elements/Step/Groups/Vertical'
    />
  </ExampleSection>
)

export default Groups
