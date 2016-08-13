import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const Variations = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Horizontal Statistic'
      description='A statistic can present its measurement horizontally'
      examplePath='views/Statistic/Variations/Horizontal'
    />
    <ComponentExample examplePath='views/Statistic/Variations/HorizontalGroup' />

    <ComponentExample
      title='Colored'
      description='A statistic can be formatted to be different colors'
      examplePath='views/Statistic/Variations/Colored'
    />

    <ComponentExample
      title='Inverted'
      description='A statistic can be formatted to fit on a dark background'
      examplePath='views/Statistic/Variations/Inverted'
    />

    <ComponentExample
      title='Evenly Divided'
      description='A statistic group can have its items divided evenly'
      examplePath='views/Statistic/Variations/EvenlyDivided'
    />

    <ComponentExample
      title='Floated'
      description='An statistic can sit to the left or right of other content'
      examplePath='views/Statistic/Variations/Floated'
    />

    <ComponentExample
      title='Size'
      description='A statistic can vary in size'
      examplePath='views/Statistic/Variations/Size'
    />
    <ComponentExample examplePath='views/Statistic/Variations/SizeDivided' />
  </ExampleSection>
)

export default Variations
