import React from 'react'
import {
  CommentText,
  CommentMetadata,
  CommentGroup,
  CommentContent,
  CommentAvatar,
  CommentActions,
  CommentAuthor,
  FormTextArea,
  Button,
  Comment,
  Form,
  Header,
} from 'semantic-ui-react'

const CommentExampleMinimal = () => (
  <CommentGroup minimal>
    <Header as='h3' dividing>
      Comments
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
      <CommentAvatar as='a' src='/images/avatar/small/elliot.jpg' />
      <CommentContent>
        <CommentAuthor as='a'>Elliot Fu</CommentAuthor>
        <CommentMetadata>
          <span>Yesterday at 12:30AM</span>
        </CommentMetadata>
        <CommentText>
          <p>This has been very useful for my research. Thanks as well!</p>
        </CommentText>
        <CommentActions>
          <a>Reply</a>
        </CommentActions>
      </CommentContent>

      <CommentGroup>
        <Comment>
          <CommentAvatar as='a' src='/images/avatar/small/jenny.jpg' />
          <CommentContent>
            <CommentAuthor as='a'>Jenny Hess</CommentAuthor>
            <CommentMetadata>
              <span>Just now</span>
            </CommentMetadata>
            <CommentText>Elliot you are always so right :)</CommentText>
            <CommentActions>
              <a>Reply</a>
            </CommentActions>
          </CommentContent>
        </Comment>
      </CommentGroup>
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

    <Form reply>
      <FormTextArea />
      <Button content='Add Reply' labelPosition='left' icon='edit' primary />
    </Form>
  </CommentGroup>
)

export default CommentExampleMinimal
