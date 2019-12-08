import React from 'react'
import { Message } from 'semantic-ui-react'

import ComponentExample from 'docs/src/components/ComponentDoc/ComponentExample'
import ExampleSection from 'docs/src/components/ComponentDoc/ExampleSection'

const CommentTypes = () => (
  <ExampleSection title='Content'>
    <ComponentExample
      title='Avatar'
      description='A comment can contain an image or avatar.'
      examplePath='views/Comment/Content/CommentExampleAvatar'
    />

    <ComponentExample
      title='Metadata'
      description='A comment can contain an image or avatar.'
      examplePath='views/Comment/Content/CommentExampleMetadata'
    />

    <ComponentExample
      title='Actions'
      description='A comment can contain an list of actions a user may perform related to this comment.'
      examplePath='views/Comment/Content/CommentExampleActions'
    />

    <ComponentExample
      title='Reply Form'
      description='A comment can contain a form to reply to a comment. This may have arbitrary content.'
      examplePath='views/Comment/Content/CommentExampleReplyForm'
    >
      <Message info>
        If a comment form is located inside a comment it will be formatted as a
        nested reply form. If the comment form is included after all comments,
        it will be formatted as a normal reply form.
      </Message>
    </ComponentExample>
    <ComponentExample examplePath='views/Comment/Content/CommentExampleReplyFormOuter' />
  </ExampleSection>
)

export default CommentTypes
