import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const EventStackTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='EventStack'
      description='This component exposes the EventStack API as public and provides a declarative way to manage it'
      examplePath='addons/EventStack/Types/EventStackExampleEventStack'
    />
  </ExampleSection>
)

export default EventStackTypesExamples
