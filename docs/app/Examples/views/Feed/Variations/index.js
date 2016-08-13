import React from 'react'
import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const FeedVariationsExamples = () => {
  return (
    <ExampleSection title='Variations'>
      <ComponentExample
        title='Size'
        description='A feed can have different sizes'
        examplePath='views/Feed/Variations/SizeSmall'
      />
      <ComponentExample examplePath='views/Feed/Variations/SizeLarge' />
    </ExampleSection>
  )
}

export default FeedVariationsExamples
