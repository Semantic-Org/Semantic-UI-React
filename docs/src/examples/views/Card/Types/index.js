import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const Types = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Card'
      description='A card displays site content in a manner similar to a playing card.'
      examplePath='views/Card/Types/CardExampleCard'
    />
    <ComponentExample
      description='You can also use props to configure the markup.'
      examplePath='views/Card/Types/CardExampleCardProps'
    />
    <ComponentExample
      title='Cards'
      description='A group of cards.'
      examplePath='views/Card/Types/CardExampleGroups'
    />
    <ComponentExample
      description='You can also use props to configure the markup.'
      examplePath='views/Card/Types/CardExampleGroupProps'
    />
  </ExampleSection>
)

export default Types
