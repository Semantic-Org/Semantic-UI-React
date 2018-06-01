import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const RailVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Attached'
      description='A rail can appear attached to the main viewport.'
      examplePath='elements/Rail/Variations/RailExampleAttached'
    />
    <ComponentExample examplePath='elements/Rail/Variations/RailExampleAttachedInternal' />

    <ComponentExample
      title='Close'
      description='A rail can appear closer to the main viewport.'
      examplePath='elements/Rail/Variations/RailExampleClose'
    />
    <ComponentExample examplePath='elements/Rail/Variations/RailExampleCloseVery' />

    <ComponentExample
      title='Size'
      description='A rail can have different sizes.'
      examplePath='elements/Rail/Variations/RailExampleSize'
    />
  </ExampleSection>
)
export default RailVariationsExamples
