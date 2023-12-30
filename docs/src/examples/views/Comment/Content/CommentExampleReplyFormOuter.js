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

const CommentExampleReplyFormOuter = () => (
  <CommentGroup>
    <Comment>
      <CommentAvatar as='a' src='/images/avatar/small/joe.jpg' />
      <CommentContent>
        <CommentAuthor>Joe Henderson</CommentAuthor>
        <CommentMetadata>
          <div>1 day ago</div>
        </CommentMetadata>
        <CommentText>
          <p>
            The hours, minutes and seconds stand as visible reminders that your
            effort put them all there.
          </p>
          <p>
            Preserve until your next run, when the watch lets you see how
            Impermanent your efforts are.
          </p>
        </CommentText>
        <CommentActions>
          <CommentAction>Reply</CommentAction>
        </CommentActions>
      </CommentContent>
    </Comment>

    <Comment>
      <CommentAvatar as='a' src='/images/avatar/small/christian.jpg' />
      <CommentContent>
        <CommentAuthor>Christian Rocha</CommentAuthor>
        <CommentMetadata>
          <div>2 days ago</div>
        </CommentMetadata>
        <CommentText>I re-tweeted this.</CommentText>
        <CommentActions>
          <CommentAction>Reply</CommentAction>
        </CommentActions>
      </CommentContent>
    </Comment>

    <Form reply>
      <FormTextArea />
      <Button content='Add Comment' labelPosition='left' icon='edit' primary />
    </Form>
  </CommentGroup>
)

export default CommentExampleReplyFormOuter
