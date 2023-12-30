import React from 'react'
import {
  CommentText,
  CommentMetadata,
  CommentGroup,
  CommentContent,
  CommentAvatar,
  CommentAuthor,
  Comment,
  Icon,
} from 'semantic-ui-react'

const CommentExampleMetadata = () => (
  <CommentGroup>
    <Comment>
      <CommentAvatar as='a' src='/images/avatar/small/stevie.jpg' />
      <CommentContent>
        <CommentAuthor>Stevie Feliciano</CommentAuthor>
        <CommentMetadata>
          <div>2 days ago</div>
          <div>
            <Icon name='star' />5 Faves
          </div>
        </CommentMetadata>
        <CommentText>
          Hey guys, I hope this example comment is helping you read this
          documentation.
        </CommentText>
      </CommentContent>
    </Comment>
  </CommentGroup>
)

export default CommentExampleMetadata
