import React from 'react'
import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const FeedTypesExamples = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Feed'
      description='A feed'
      examplePath='views/Feed/Types/FeedExampleBasic'
    />
    <ComponentExample
      description='You can also pass an array of events to generate the markup'
      examplePath='views/Feed/Types/FeedExampleEventsProp'
    />
  </ExampleSection>
)

export default FeedTypesExamples
