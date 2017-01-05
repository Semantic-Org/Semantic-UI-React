import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const DimmerVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Blurring'
      description='A dimmable element can blur its contents.'
      examplePath='modules/Dimmer/Variations/DimmerExampleBlurring'
    />
    <ComponentExample examplePath='modules/Dimmer/Variations/DimmerExampleBlurringInverted' />

    <ComponentExample
      title='Simple Dimmer'
      description='A dimmer can be controlled without Javascript.'
      examplePath='modules/Dimmer/Variations/DimmerExampleSimple'
    />

    <ComponentExample
      title='Inverted'
      description='A dimmer can be formatted to have its colors inverted.'
      examplePath='modules/Dimmer/Variations/DimmerExampleInverted'
    />
  </ExampleSection>
)

export default DimmerVariationsExamples
