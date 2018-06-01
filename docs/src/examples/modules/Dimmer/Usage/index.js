import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const DimmerStatesExamples = () => (
  <ExampleSection title='Usage'>
    <ComponentExample
      title='Dimmer Events'
      description='A dimmer can trigger a visibility change on an event.'
      examplePath='modules/Dimmer/Usage/DimmerExampleEvents'
    />
    <ComponentExample
      title='Loaders inside Dimmers'
      description='Any loader inside a dimmer will automatically use an appropriate color to match.'
      examplePath='modules/Dimmer/Usage/DimmerExampleLoader'
    />
  </ExampleSection>
)

export default DimmerStatesExamples
