import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Variations = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Divided'
      description='Items can be divided to better distinguish between grouped content.'
      examplePath='views/Item/Variations/ItemExampleDivided'
    />

    <ComponentExample
      title='Relaxed'
      description='A group of items can relax its padding to provide more negative space.'
      examplePath='views/Item/Variations/ItemExampleRelaxed'
    />
    <ComponentExample examplePath='views/Item/Variations/ItemExampleVeryRelaxed' />

    <ComponentExample
      title='Unstackable'
      description='A group of items can prevent items from stacking on mobile.'
      examplePath='views/Item/Variations/ItemExampleUnstackable'
    />

    <ComponentExample
      title='Link Item'
      description='An item can be formatted so that the entire contents link to another page.'
      examplePath='views/Item/Variations/ItemExampleLink'
    />

    <ComponentExample
      title='Vertical Alignment'
      description='Content can specify its vertical alignment.'
      examplePath='views/Item/Variations/ItemExampleAlignment'
    />

    <ComponentExample
      title='Floated Content'
      description='Any content element can be floated left or right.'
      examplePath='views/Item/Variations/ItemExampleFloated'
    />
  </ExampleSection>
)

export default Variations
