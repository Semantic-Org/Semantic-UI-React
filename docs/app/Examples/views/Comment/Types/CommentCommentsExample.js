import React from 'react'
import { Comment } from 'stardust'

const CommentCommentsExample = () => (
  <Comment.Group>
    <Header dividing>Comments</Header>
    <Comment>
      <Comment.Avatar>
        <img src='http://semantic-ui.com/images/avatar/small/matt.jpg' />
      </Comment.Avatar>
      <Comment.Content>
        <Comment.Author>Matt</Comment.Author>
        <Comment.Meta>
          <span class="date">Today at 5:42PM</span>
        </Comment.Meta>
        <Comment.Text>
          How artistic!
        </Comment.Text>
        <Comment.Actions class="actions">
          <a class="reply">Reply</a>
        </Comment.Actions>
      </Comment.Content>
    </Comment>
    <Comment>
      <Comment.Avatar>
        <img src='http://semantic-ui.com/images/avatar/small/matt.jpg' />
      </Comment.Avatar>
      <Comment.Content>
        <Comment.Author>Elliot Fu</Comment.Author>
        <Comment.Meta>
          <span class="date">Yesterday at 12:30AM</span>
        </Comment.Meta>
        <Comment.Text>
          <p>This has been very useful for my research. Thanks as well!</p>
        </Comment.Text>
        <Comment.Actions class="actions">
          <a class="reply">Reply</a>
        </Comment.Actions>
      </Comment.Content>
      <Comment.Group>
        <Comment>
          <Comment.Avatar>
            <img src='http://semantic-ui.com/images/avatar/small/jenny.jpg' />
          </Comment.Avatar>
          <Comment.Content>
            <Comment.Author>Jenny Hess</Comment.Author>
            <Comment.Meta>
              <span class="date">Just now</span>
            </Comment.Meta>
            <Comment.Text>
              Elliot you are always so right :)
            </Comment.Text>
            <Comment.Actions>
              <a class="reply">Reply</a>
            </Comment.Actions>
          </Comment.Content>
        </Comment>
      </Comment.Group>
    </Comment>
    <Comment>
      <Comment.Avatar>
        <img src='http://semantic-ui.com/images/avatar/small/joe.jpg' />
      </Comment.Avatar>
      <Comment.Content>
        <Comment.Author>Joe Henderson</Comment.Author>
        <Comment.Meta>
          <span class="date">5 days ago</span>
        </Comment.Meta>
        <Comment.Text>
          Dude, this is awesome. Thanks so much
        </Commment.Text>
        <Comment.Actions>
          <a class="reply">Reply</a>
        </Comment.Actions>
      </Comment.Conent>
    </Comment>
  </Comment.Group>
)
