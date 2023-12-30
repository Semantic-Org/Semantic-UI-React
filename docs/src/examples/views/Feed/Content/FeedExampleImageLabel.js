import React from 'react'
import { FeedLabel, FeedEvent, FeedContent, Feed } from 'semantic-ui-react'

const FeedExampleImageLabel = () => (
  <Feed>
    <FeedEvent>
      <FeedLabel>
        <img src='/images/avatar/small/elliot.jpg' />
      </FeedLabel>
      <FeedContent>
        You added Elliot Fu to the group <a>Coworkers</a>
      </FeedContent>
    </FeedEvent>
  </Feed>
)

export default FeedExampleImageLabel
