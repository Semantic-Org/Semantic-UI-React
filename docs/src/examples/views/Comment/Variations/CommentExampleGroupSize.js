import React from 'react'
import {
  CommentText,
  CommentMetadata,
  CommentGroup,
  CommentContent,
  CommentAvatar,
  CommentActions,
  CommentAuthor,
  Comment,
  Header,
} from 'semantic-ui-react'

const CommentExampleGroupSize = () => (
  <div>
    <CommentGroup size='mini'>
      <Header as='h3' dividing>
        Mini Comments
      </Header>

      <Comment>
        <CommentAvatar as='a' src='/images/avatar/small/matt.jpg' />
        <CommentContent>
          <CommentAuthor as='a'>Matt</CommentAuthor>
          <CommentMetadata>
            <span>Today at 5:42PM</span>
          </CommentMetadata>
          <CommentText>How artistic!</CommentText>
          <CommentActions>
            <a>Reply</a>
          </CommentActions>
        </CommentContent>
      </Comment>
      <Comment>
        <CommentAvatar as='a' src='/images/avatar/small/joe.jpg' />
        <CommentContent>
          <CommentAuthor as='a'>Joe Henderson</CommentAuthor>
          <CommentMetadata>
            <span>5 days ago</span>
          </CommentMetadata>
          <CommentText>Dude, this is awesome. Thanks so much</CommentText>
          <CommentActions>
            <a>Reply</a>
          </CommentActions>
        </CommentContent>
      </Comment>
    </CommentGroup>
    <CommentGroup size='small'>
      <Header as='h3' dividing>
        Small Comments
      </Header>

      <Comment>
        <CommentAvatar as='a' src='/images/avatar/small/matt.jpg' />
        <CommentContent>
          <CommentAuthor as='a'>Matt</CommentAuthor>
          <CommentMetadata>
            <span>Today at 5:42PM</span>
          </CommentMetadata>
          <CommentText>How artistic!</CommentText>
          <CommentActions>
            <a>Reply</a>
          </CommentActions>
        </CommentContent>
      </Comment>
      <Comment>
        <CommentAvatar as='a' src='/images/avatar/small/joe.jpg' />
        <CommentContent>
          <CommentAuthor as='a'>Joe Henderson</CommentAuthor>
          <CommentMetadata>
            <span>5 days ago</span>
          </CommentMetadata>
          <CommentText>Dude, this is awesome. Thanks so much</CommentText>
          <CommentActions>
            <a>Reply</a>
          </CommentActions>
        </CommentContent>
      </Comment>
    </CommentGroup>
    <CommentGroup size='large'>
      <Header as='h3' dividing>
        Large Comments
      </Header>

      <Comment>
        <CommentAvatar as='a' src='/images/avatar/small/matt.jpg' />
        <CommentContent>
          <CommentAuthor as='a'>Matt</CommentAuthor>
          <CommentMetadata>
            <span>Today at 5:42PM</span>
          </CommentMetadata>
          <CommentText>How artistic!</CommentText>
          <CommentActions>
            <a>Reply</a>
          </CommentActions>
        </CommentContent>
      </Comment>
      <Comment>
        <CommentAvatar as='a' src='/images/avatar/small/joe.jpg' />
        <CommentContent>
          <CommentAuthor as='a'>Joe Henderson</CommentAuthor>
          <CommentMetadata>
            <span>5 days ago</span>
          </CommentMetadata>
          <CommentText>Dude, this is awesome. Thanks so much</CommentText>
          <CommentActions>
            <a>Reply</a>
          </CommentActions>
        </CommentContent>
      </Comment>
    </CommentGroup>
    <CommentGroup size='massive'>
      <Header as='h3' dividing>
        Massive Comments
      </Header>

      <Comment>
        <CommentAvatar as='a' src='/images/avatar/small/matt.jpg' />
        <CommentContent>
          <CommentAuthor as='a'>Matt</CommentAuthor>
          <CommentMetadata>
            <span>Today at 5:42PM</span>
          </CommentMetadata>
          <CommentText>How artistic!</CommentText>
          <CommentActions>
            <a>Reply</a>
          </CommentActions>
        </CommentContent>
      </Comment>
      <Comment>
        <CommentAvatar as='a' src='/images/avatar/small/joe.jpg' />
        <CommentContent>
          <CommentAuthor as='a'>Joe Henderson</CommentAuthor>
          <CommentMetadata>
            <span>5 days ago</span>
          </CommentMetadata>
          <CommentText>Dude, this is awesome. Thanks so much</CommentText>
          <CommentActions>
            <a>Reply</a>
          </CommentActions>
        </CommentContent>
      </Comment>
    </CommentGroup>
  </div>
)

export default CommentExampleGroupSize
