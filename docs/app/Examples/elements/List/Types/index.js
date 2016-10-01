import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const ListTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='List'
      description='A list groups related content'
      examplePath='elements/List/Types/ListExampleList'
    />
    <ComponentExample
      title='Bulleted'
      description='A list can mark items with a bullet'
      examplePath='elements/List/Types/ListExampleBulleted'
    />
    <ComponentExample
      title='Ordered'
      description='A list can be ordered numerically'
      examplePath='elements/List/Types/ListExampleOrdered'
    />
    <ComponentExample
      title='Link'
      description='A list can be specially formatted for navigation links'
      examplePath='elements/List/Types/ListExampleLink'
    />
  </ExampleSection>
)

export default ListTypesExamples
