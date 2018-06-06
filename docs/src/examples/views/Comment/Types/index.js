import React from 'react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const CommentTypes = () => (
  <ExampleSection title='Types'>
    <ComponentExample
      title='Comments'
      description='A basic list of comments.'
      examplePath='views/Comment/Types/CommentExampleComment'
    />
  </ExampleSection>
)

export default CommentTypes
