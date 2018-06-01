import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

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

    <ComponentExample
      title='Vertical Alignment'
      description='A dimmer can have its content top or bottom aligned.'
      examplePath='modules/Dimmer/Variations/DimmerExampleVerticalAlignTop'
      suiVersion='2.3.0'
    />
    <ComponentExample examplePath='modules/Dimmer/Variations/DimmerExampleVerticalAlignBottom' />
  </ExampleSection>
)

export default DimmerVariationsExamples
