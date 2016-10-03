import React from 'react'
import { Button, Comment, Form, Icon } from 'stardust'

const CommentExampleReplyForm = () => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='http://semantic-ui.com/images/avatar/small/steve.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Steve Jobes</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Revolutionary!</Comment.Text>
        <Comment.Actions>
          <Comment.Action active>Reply</Comment.Action>
        </Comment.Actions>
        <Comment.ReplyForm>
          <Form.TextArea />
          <Button labeled icon primary>
            <Icon name='edit' />
            Add Reply
          </Button>
        </Comment.ReplyForm>
      </Comment.Content>
    </Comment>
  </Comment.Group>
)

export default CommentExampleReplyForm
