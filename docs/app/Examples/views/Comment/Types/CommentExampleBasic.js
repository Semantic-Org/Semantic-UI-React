import React from 'react'
import { Button, Comment, Form, Header, Icon } from 'stardust'

const CommentExampleBasic = () => (
  <Comment.Group>
    <Header as='h3' dividing>Comments</Header>

    <Comment>
      <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/matt.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Matt</Comment.Author>
        <Comment.Metadata>
          <Comment.Date>Today at 5:42PM</Comment.Date>
        </Comment.Metadata>
        <Comment.Text>How artistic!</Comment.Text>
        <Comment.Actions>
          <Comment.Reply as='a'>Reply</Comment.Reply>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment>
      <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Elliot Fu</Comment.Author>
        <Comment.Metadata>
          <Comment.Date>Yesterday at 12:30AM</Comment.Date>
        </Comment.Metadata>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions>
          <Comment.Reply as='a'>Reply</Comment.Reply>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/jenny.jpg' />
          <Comment.Content>
            <Comment.Author as='a'>Jenny Hess</Comment.Author>
            <Comment.Metadata>
              <Comment.Date>Just now</Comment.Date>
            </Comment.Metadata>
            <Comment.Text>
              Elliot you are always so right :)
            </Comment.Text>
            <Comment.Actions>
              <Comment.Reply as='a'>Reply</Comment.Reply>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>

    <Comment>
      <Comment.Avatar src='http://semantic-ui.com/images/avatar/small/joe.jpg' />
      <Comment.Content>
        <Comment.Author as='a'>Joe Henderson</Comment.Author>
        <Comment.Metadata>
          <Comment.Date>5 days ago</Comment.Date>
        </Comment.Metadata>
        <Comment.Text>
          Dude, this is awesome. Thanks so much
        </Comment.Text>
        <Comment.Actions>
          <Comment.Reply as='a'>Reply</Comment.Reply>
        </Comment.Actions>
      </Comment.Content>
    </Comment>

    <Comment.Reply as={Form}>
      <Form.TextArea />
      <Button color='blue' labeled icon>
        <Icon name='edit' />
        Add Reply
      </Button>
    </Comment.Reply>
  </Comment.Group>
)

export default CommentExampleBasic
