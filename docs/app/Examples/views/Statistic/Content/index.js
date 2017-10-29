import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'
import ShorthandExample from 'docs/app/Components/ComponentDoc/ShorthandExample'

const Content = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Value'
      description='A statistic can contain a numeric, icon, image, or text value.'
      examplePath='views/Statistic/Content/StatisticExampleValue'
    />
    <ShorthandExample examplePath='views/Statistic/Content/StatisticExampleValueShorthand' />

    <ComponentExample
      title='Label'
      description='A statistic can contain a label to help provide context for the presented value.'
      examplePath='views/Statistic/Content/StatisticExampleLabel'
    />
  </ExampleSection>
)

export default Content
