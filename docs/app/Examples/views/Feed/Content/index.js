import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const FeedContentExamples = () => {
  return (
    <ExampleSection title='Content'>
      <ComponentExample
        title='Label'
        description='An event can contain an image or icon label.'
        examplePath='views/Feed/Content/LabelImage'
      />
      <ComponentExample examplePath='views/Feed/Content/LabelIcon' />
    </ExampleSection>
  )
}

export default FeedContentExamples
