import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const StepVariationsExamples = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Stackable'
      description='A step can stack vertically only on smaller screens.'
      examplePath='elements/Step/Variations/StepExampleStackable'
    />

    <ComponentExample
      title='Unstackable'
      description='A step can prevent itself from stacking on mobile.'
      examplePath='elements/Step/Variations/StepExampleUnstackable'
      suiVersion='2.2.11'
    />

    <ComponentExample
      title='Fluid'
      description='A fluid step takes up the width of its container.'
      examplePath='elements/Step/Variations/StepExampleFluid'
    />

    <ComponentExample
      title='Size'
      description='Steps can have different sizes.'
      examplePath='elements/Step/Variations/StepExampleSizes'
    />
  </ExampleSection>
)

export default StepVariationsExamples
