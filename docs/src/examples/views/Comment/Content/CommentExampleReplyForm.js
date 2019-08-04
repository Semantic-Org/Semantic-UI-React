import React from 'react'
import { Button, Comment, Form } from 'semantic-ui-react'

const CommentExampleReplyForm = () => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='/images/avatar/small/steve.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Steve Jobes</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
        </Comment.Metadata>
        <Comment.Text>Revolutionary!</Comment.Text>
        <Comment.Actions>
          <Comment.Action active>Reply</Comment.Action>
        </Comment.Actions>
        <Form reply>
          <Form.TextArea />
          <Button
            content='Add Reply'
            labelPosition='left'
            icon='edit'
            primary
          />
        </Form>
      </Comment.Content>
    </Comment>
  </Comment.Group>
)

export default CommentExampleReplyForm
