import React from 'react'
import { Comment, Icon } from 'semantic-ui-react'

const CommentExampleActions = () => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author>Tom Lukic</Comment.Author>
        <Comment.Text>
          This will be great for business reports. I will definitely download
          this.
        </Comment.Text>
        <Comment.Actions>
          <Comment.Action>Reply</Comment.Action>
          <Comment.Action>Save</Comment.Action>
          <Comment.Action>Hide</Comment.Action>
          <Comment.Action>
            <Icon name='expand' />
            Full-screen
          </Comment.Action>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
  </Comment.Group>
)

export default CommentExampleActions
