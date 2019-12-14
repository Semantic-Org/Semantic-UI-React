import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'

const FeedExampleSizeLarge = () => (
  <Feed size='large'>
    <Feed.Event>
      <Feed.Label image='/images/avatar/small/elliot.jpg' />
      <Feed.Content>
        <Feed.Summary>
          <Feed.User>Elliot Fu</Feed.User> added you as a friend
          <Feed.Date>1 Hour Ago</Feed.Date>
        </Feed.Summary>
        <Feed.Meta>
          <Feed.Like>
            <Icon name='like' />4 Likes
          </Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label icon='pencil' />
      <Feed.Content>
        <Feed.Summary>
          You submitted a new post to the page
          <Feed.Date>3 days ago</Feed.Date>
        </Feed.Summary>
        <Feed.Extra text>
          I'm having a BBQ this weekend. Come by around 4pm if you can.
        </Feed.Extra>
        <Feed.Meta>
          <Feed.Like>11 Likes</Feed.Like>
        </Feed.Meta>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image='/images/avatar/small/helen.jpg' />
      <Feed.Content>
        <Feed.Date>4 days ago</Feed.Date>
        <Feed.Summary>
          <a>Helen Troy</a> added <a>2 new illustrations</a>
        </Feed.Summary>

        <Feed.Extra images>
          <a>
            <img src='/images/wireframe/image.png' />
          </a>
          <a>
            <img src='/images/wireframe/image.png' />
          </a>
        </Feed.Extra>

        <Feed.Meta like='1 Like' />
      </Feed.Content>
    </Feed.Event>
  </Feed>
)

export default FeedExampleSizeLarge
