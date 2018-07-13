import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

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
      title='Attached'
      description='Steps can be attached to other elements.'
      examplePath='elements/Step/Variations/StepExampleAttached'
    />

    <ComponentExample
      title='Evenly Divided'
      description='Steps can be divided evenly inside their parent.'
      examplePath='elements/Step/Variations/StepExampleEvenlyDivided'
    />
    <ComponentExample examplePath='elements/Step/Variations/StepExampleEvenlyDividedAnother' />

    <ComponentExample
      title='Size'
      description='Steps can have different sizes.'
      examplePath='elements/Step/Variations/StepExampleSizeMini'
    />
    <ComponentExample examplePath='elements/Step/Variations/StepExampleSizeTiny' />
    <ComponentExample examplePath='elements/Step/Variations/StepExampleSizeSmall' />
    <ComponentExample examplePath='elements/Step/Variations/StepExampleSizeLarge' />
    <ComponentExample examplePath='elements/Step/Variations/StepExampleSizeBig' />
    <ComponentExample examplePath='elements/Step/Variations/StepExampleSizeHuge' />
    <ComponentExample examplePath='elements/Step/Variations/StepExampleSizeMassive' />
  </ExampleSection>
)

export default StepVariationsExamples
