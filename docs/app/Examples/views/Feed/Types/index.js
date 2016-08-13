import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const FeedTypesExamples = () => {
  return (
    <ExampleSection title='Types'>
      <ComponentExample
        title='Feed'
        description='A feed'
        examplePath='views/Feed/Types/Basic'
      />
      <ComponentExample examplePath='views/Feed/Types/Props' />
    </ExampleSection>
  )
}

export default FeedTypesExamples
