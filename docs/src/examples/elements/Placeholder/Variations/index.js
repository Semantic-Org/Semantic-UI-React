import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const PlaceholderVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Line Length'
      description='A line can specify how long its contents should appear.'
      examplePath='elements/Placeholder/Variations/PlaceholderExampleLineLength'
    />
    <ComponentExample examplePath='elements/Placeholder/Variations/PlaceholderExampleLineLengthWithHeader' />

    <ComponentExample
      title='Fluid'
      description='A fluid placeholder takes up the width of its container.'
      examplePath='elements/Placeholder/Variations/PlaceholderExampleFluid'
    />
    <ComponentExample
      title='Inverted'
      description='A placeholder can have their colors inverted.'
      examplePath='elements/Placeholder/Variations/PlaceholderExampleInverted'
    />
  </ExampleSection>
)

export default PlaceholderVariationsExamples
