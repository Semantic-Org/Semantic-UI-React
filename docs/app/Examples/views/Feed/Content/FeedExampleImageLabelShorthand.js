import React from 'react'
import { Feed } from 'stardust'

const FeedExampleImageLabelShorthand = () => (
  <Feed>
    <Feed.Event
      image='http://semantic-ui.com/images/avatar/small/elliot.jpg'
      content='You added Elliot Fu to the group Coworkers'
    />
    <Feed.Event>
      <Feed.Label image='http://semantic-ui.com/images/avatar/small/elliot.jpg' />
      <Feed.Content content='You added Elliot Fu to the group Coworkers' />
    </Feed.Event>
  </Feed>
)

export default FeedExampleImageLabelShorthand
