import React from 'react'
import { Comment } from 'semantic-ui-react'

const CommentExampleAvatar = () => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar src='/images/avatar/small/elliot.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Elliot Fu</Comment.Author>
      </Comment.Content>
    </Comment>
  </Comment.Group>
)

export default CommentExampleAvatar
