import React from 'react'
import { Message } from 'stardust'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

// TODO: Update <Message> usage after v1 API

const Groups = () => (
  <ExampleSection title='Groups'>
    <ComponentExample
      title='Steps'
      description='A set of steps.'
      examplePath='elements/Step/Groups/Groups'
    >
      <Message className='positive' icon='mobile' header='Responsive Element'>
        Steps will automatically stack on mobile. To make steps automatically stack for tablet use the <b>tablet
        stackable</b> variation.
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
