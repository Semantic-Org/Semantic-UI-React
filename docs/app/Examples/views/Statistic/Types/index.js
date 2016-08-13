import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const Types = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Statistic'
      description='A statistic can display a value with a label above or below it'
      examplePath='views/Statistic/Types/BottomLabel'
    />
    <ComponentExample examplePath='views/Statistic/Types/TopLabel' />

    <ComponentExample
      title='Statistic Group'
      description='A group of statistics'
      examplePath='views/Statistic/Types/Groups'
    />
  </ExampleSection>
)

export default Types
