import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const CommentVariations = () => (
  <ExampleSection title='Variations'>
    <ComponentExample
      title='Threaded'
      description='A comment list can be threaded to showing the relationship between conversations.'
      examplePath='views/Comment/Variations/CommentExampleThreaded'
    />
    <ComponentExample
      title='Minimal'
      description='Comments can hide extra information unless a user shows intent to interact with a comment.'
      examplePath='views/Comment/Variations/CommentExampleMinimal'
    />
  </ExampleSection>
)

export default CommentVariations
