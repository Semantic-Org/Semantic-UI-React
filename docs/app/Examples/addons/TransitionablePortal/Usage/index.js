import React from 'react'
import { Link } from 'react-router-dom'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const TransitionablePortalUsageExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Transition'
      description='You can use define transitions.'
      examplePath='addons/TransitionablePortal/Usage/TransitionablePortalExampleTransition'
    >
      <Message info>
        See <Link to='/modules/transition'>Transition</Link> for more examples of usage.
      </Message>
    </ComponentExample>
  </ExampleSection>
)

export default TransitionablePortalUsageExamples
