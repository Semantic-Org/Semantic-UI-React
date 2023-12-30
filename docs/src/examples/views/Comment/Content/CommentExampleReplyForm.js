import React from 'react'
import {
  CommentText,
  CommentMetadata,
  CommentGroup,
  CommentContent,
  CommentAvatar,
  CommentActions,
  CommentAction,
  CommentAuthor,
  FormTextArea,
  Button,
  Comment,
  Form,
} from 'semantic-ui-react'

const CommentExampleReplyForm = () => (
  <CommentGroup>
    <Comment>
      <CommentAvatar as='a' src='/images/avatar/small/steve.jpg' />
      <CommentContent>
        <CommentAuthor as='a'>Steve Jobes</CommentAuthor>
        <CommentMetadata>
          <div>2 days ago</div>
        </CommentMetadata>
        <CommentText>Revolutionary!</CommentText>
        <CommentActions>
          <CommentAction active>Reply</CommentAction>
        </CommentActions>
        <Form reply>
          <FormTextArea />
          <Button
            content='Add Reply'
            labelPosition='left'
            icon='edit'
            primary
          />
        </Form>
      </CommentContent>
    </Comment>
  </CommentGroup>
)

export default CommentExampleReplyForm
