import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'
import ShorthandExample from 'docs/src/components/ComponentDoc/ShorthandExample'

const Types = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Statistic'
      description='A statistic can display a value with a label above or below it.'
      examplePath='views/Statistic/Types/StatisticExampleStatistic'
    />
    <ShorthandExample examplePath='views/Statistic/Types/StatisticExampleStatisticShorthand' />
    <ComponentExample examplePath='views/Statistic/Types/StatisticExampleTopLabel' />

    <ComponentExample
      title='Statistic Group'
      description='A group of statistics.'
      examplePath='views/Statistic/Types/StatisticExampleGroup'
    />
    <ShorthandExample examplePath='views/Statistic/Types/StatisticExampleGroupShorthand' />
  </ExampleSection>
)

export default Types
