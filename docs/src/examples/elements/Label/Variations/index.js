import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const LabelVariations = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Circular'
      description='A label can be circular'
      examplePath='elements/Label/Variations/LabelExampleCircular'
    />
    <ComponentExample examplePath='elements/Label/Variations/LabelExampleCircularEmpty' />

    <ComponentExample
      title='Basic'
      description='A label can reduce its complexity'
      examplePath='elements/Label/Variations/LabelExampleBasic'
    />

    <ComponentExample
      title='Colored'
      description='A label can have different colors'
      examplePath='elements/Label/Variations/LabelExampleColored'
    />

    <ComponentExample
      title='Size'
      description='A label can be small or large'
      examplePath='elements/Label/Variations/LabelExampleSize'
    />
  </ExampleSection>
)

export default LabelVariations
