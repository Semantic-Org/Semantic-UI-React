import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const TransitionablePortalTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Transitionable Portal'
      description='A basic transitionable portal.'
      examplePath='addons/TransitionablePortal/Types/TransitionablePortalExamplePortal'
    />
    <ComponentExample
      title='Controlled'
      description='A controlled transitionable portal.'
      examplePath='addons/TransitionablePortal/Types/TransitionablePortalExampleControlled'
    />
  </ExampleSection>
)

export default TransitionablePortalTypesExamples
