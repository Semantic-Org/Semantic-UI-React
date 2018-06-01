import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Types = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Items'
      description='A group of items.'
      examplePath='views/Item/Types/ItemExampleItems'
    />
    <ComponentExample examplePath='views/Item/Types/ItemExampleProps' />
  </ExampleSection>
)

export default Types
