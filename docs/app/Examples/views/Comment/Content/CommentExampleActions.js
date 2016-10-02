import React from 'react'
import { Comment, Icon } from 'stardust'

const CommentExampleActions = () => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='http://semantic-ui.com/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author>Tom Lukic</Comment.Author>
        <Comment.Text>
          This will be great for business reports. I will definitely download this.
        </Comment.Text>
        <Comment.Actions>
          <a>Reply</a>
          <a>Save</a>
          <a>Hide</a>
          <a>
            <Icon name='expand' />
            Full-screen
          </a>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  </Comment.Group>
)

export default CommentExampleActions
