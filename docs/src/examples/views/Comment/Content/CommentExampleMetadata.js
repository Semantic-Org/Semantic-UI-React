import React from 'react'
import { Comment, Icon } from 'semantic-ui-react'

const CommentExampleMetadata = () => (
  <Comment.Group>
    <Comment>
      <Comment.Avatar as='a' src='/images/avatar/small/stevie.jpg' />
      <Comment.Content>
        <Comment.Author>Stevie Feliciano</Comment.Author>
        <Comment.Metadata>
          <div>2 days ago</div>
          <div>
            <Icon name='star' />5 Faves
          </div>
        </Comment.Metadata>
        <Comment.Text>
          Hey guys, I hope this example comment is helping you read this
          documentation.
        </Comment.Text>
      </Comment.Content>
    </Comment>
  </Comment.Group>
)

export default CommentExampleMetadata
