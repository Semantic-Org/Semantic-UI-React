import React from 'react'
import { FeedLabel, FeedEvent, FeedContent, Feed } from 'semantic-ui-react'

const FeedExampleImageLabelShorthand = () => (
  <Feed>
    <FeedEvent
      image='/images/avatar/small/elliot.jpg'
      content='You added Elliot Fu to the group Coworkers'
    />
    <FeedEvent>
      <FeedLabel image='/images/avatar/small/elliot.jpg' />
      <FeedContent content='You added Elliot Fu to the group Coworkers' />
    </FeedEvent>
  </Feed>
)

export default FeedExampleImageLabelShorthand
