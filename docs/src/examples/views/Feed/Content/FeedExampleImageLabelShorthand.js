import React from 'react'
import { Feed } from 'semantic-ui-react'

const FeedExampleImageLabelShorthand = () => (
  <Feed>
    <Feed.Event
      image='/assets/images/avatar/small/elliot.jpg'
      content='You added Elliot Fu to the group Coworkers'
    />
    <Feed.Event>
      <Feed.Label image='/assets/images/avatar/small/elliot.jpg' />
      <Feed.Content content='You added Elliot Fu to the group Coworkers' />
    </Feed.Event>
  </Feed>
)

export default FeedExampleImageLabelShorthand
