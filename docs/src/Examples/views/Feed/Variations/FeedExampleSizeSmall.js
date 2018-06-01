import React from 'react'
import { Feed, Header } from 'semantic-ui-react'

const FeedExampleSizeSmall = () => (
  <Feed size='small'>
    <Header as='h4'>Followers Activity</Header>

    <Feed.Event>
      <Feed.Content>
        <Feed.Summary>
          <a>Elliot Fu</a> added <a>Jenny Hess</a> as a friend
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Content>
        <Feed.Summary>
          <a>Stevie Feliciano</a> added <a>Elliot Fu</a> as a friend
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Content>
        <Feed.Summary>
          <a>Helen Troy</a> added <a>Christian Rocha</a> as a friend
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>

    <Feed.Event>
      <Feed.Content>
        <Feed.Summary>
          <a>Christian Rocha</a> signed up for the site.
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  </Feed>
)

export default FeedExampleSizeSmall
