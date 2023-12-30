import React from 'react'
import {
  CommentText,
  CommentGroup,
  CommentContent,
  CommentAvatar,
  CommentActions,
  CommentAction,
  CommentAuthor,
  Comment,
  Icon,
} from 'semantic-ui-react'

const CommentExampleActions = () => (
  <CommentGroup>
    <Comment>
      <CommentAvatar as='a' src='/images/avatar/small/joe.jpg' />
      <CommentContent>
        <CommentAuthor>Tom Lukic</CommentAuthor>
        <CommentText>
          This will be great for business reports. I will definitely download
          this.
        </CommentText>
        <CommentActions>
          <CommentAction>Reply</CommentAction>
          <CommentAction>Save</CommentAction>
          <CommentAction>Hide</CommentAction>
          <CommentAction>
            <Icon name='expand' />
            Full-screen
          </CommentAction>
        </CommentActions>
      </CommentContent>
    </Comment>
  </CommentGroup>
)

export default CommentExampleActions
