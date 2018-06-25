import React from 'react'
import { Feed } from 'semantic-ui-react'

const FeedExampleImageLabel = () => (
  <Feed>
    <Feed.Event>
      <Feed.Label>
        <img src='/images/avatar/small/elliot.jpg' />
      </Feed.Label>
      <Feed.Content>
        You added Elliot Fu to the group <a>Coworkers</a>
      </Feed.Content>
    </Feed.Event>
  </Feed>
)

export default FeedExampleImageLabel
