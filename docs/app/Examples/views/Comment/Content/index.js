import React from 'react'

import ComponentExample from 'docs/app/Components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/app/Components/ComponentDoc/ExampleSection'

const CommentTypes = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Avatar'
      description='A comment can contain an image or avatar'
      examplePath='views/Comment/Content/CommentExampleAvatar'
    />

    <ComponentExample
      title='Metadata'
      description='A comment can contain an image or avatar'
      examplePath='views/Comment/Content/CommentExampleMetadata'
    />

    <ComponentExample
      title='Actions'
      description='A comment can contain an list of actions a user may perform related to this comment'
      examplePath='views/Comment/Content/CommentExampleActions'
    />
  </ExampleSection>
)

export default CommentTypes
