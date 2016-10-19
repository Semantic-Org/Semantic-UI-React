import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const DimmerVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Blurring'
      description='A dimmable element can blur its contents'
      examplePath='modules/Dimmer/Variations/DimmerExampleBlurring'
    />
    <ComponentExample examplePath='modules/Dimmer/Variations/DimmerExampleBlurringInverted' />
  </ExampleSection>
)

export default DimmerVariationsExamples
