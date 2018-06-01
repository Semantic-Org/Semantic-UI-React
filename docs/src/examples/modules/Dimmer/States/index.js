import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const DimmerStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Active'
      description='An active dimmer will dim its parent container.'
      examplePath='modules/Dimmer/States/DimmerExampleActive'
    />
  </ExampleSection>
)

export default DimmerStatesExamples
