import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const Variations = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Horizontal Statistic'
      description='A statistic can present its measurement horizontally.'
      examplePath='views/Statistic/Variations/StatisticExampleHorizontal'
    />
    <ComponentExample examplePath='views/Statistic/Variations/StatisticExampleHorizontalGroup' />

    <ComponentExample
      title='Colored'
      description='A statistic can be formatted to be different colors.'
      examplePath='views/Statistic/Variations/StatisticExampleColored'
    />

    <ComponentExample
      title='Inverted'
      description='A statistic can be formatted to fit on a dark background.'
      examplePath='views/Statistic/Variations/StatisticExampleInverted'
    />

    <ComponentExample
      title='Evenly Divided'
      description='A statistic group can have its items divided evenly.'
      examplePath='views/Statistic/Variations/StatisticExampleEvenlyDivided'
    />

    <ComponentExample
      title='Floated'
      description='An statistic can sit to the left or right of other content.'
      examplePath='views/Statistic/Variations/StatisticExampleFloated'
    />

    <ComponentExample
      title='Size'
      description='A statistic can vary in size.'
      examplePath='views/Statistic/Variations/StatisticExampleSize'
    />
    <ComponentExample examplePath='views/Statistic/Variations/StatisticExampleSizeDivided' />
  </ExampleSection>
)

export default Variations
