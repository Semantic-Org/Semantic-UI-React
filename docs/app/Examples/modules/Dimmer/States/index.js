import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const DimmerStatesExamples = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Active'
      description='An active dimmer will dim its parent container'
      examplePath='modules/Dimmer/States/DimmerExampleActive'
    />
    <ComponentExample
      title='Disabled'
      description='A disabled dimmer cannot be activated'
      examplePath='modules/Dimmer/States/DimmerExampleDisabled'
    />
  </ExampleSection>
)

export default DimmerStatesExamples
