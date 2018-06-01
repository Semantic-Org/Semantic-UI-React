import React from 'react'

import ComponentExample from 'docs/src/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/Components/ComponentDoc/ExampleSection'

const CommentTypes = () => (
  <ExampleSection title='States'>
    <ComponentExample
      title='Collapsed'
      description='Comments can be collapsed, or hidden from view.'
      examplePath='views/Comment/States/CommentExampleCollapsed'
    />
  </ExampleSection>
)

export default CommentTypes
