import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const Types = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Statistic'
      description='A statistic can display a value with a label above or below it.'
      examplePath='views/Statistic/Types/StatisticExampleBottomLabel'
    />
    <ComponentExample examplePath='views/Statistic/Types/StatisticExampleTopLabel' />

    <ComponentExample
      title='Statistic Group'
      description='A group of statistics.'
      examplePath='views/Statistic/Types/StatisticExampleGroups'
    />

    <ComponentExample
      title='Statistic Group Colored'
      description='A group of colored statistics.'
      examplePath='views/Statistic/Types/StatisticExampleGroupColored'
    />

    <ComponentExample
      title='Statistic Group Size'
      description='A group of statistics can vary in size.'
      examplePath='views/Statistic/Types/StatisticExampleGroupSize'
    />

    <ComponentExample
      title='Statistic Group Inverted'
      description='A group of statistics can be formatted to fit on a dark background.'
      examplePath='views/Statistic/Types/StatisticExampleGroupInverted'
    />

  </ExampleSection>
)

export default Types
