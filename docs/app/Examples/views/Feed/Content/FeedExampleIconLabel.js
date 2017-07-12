import React from 'react'
import { Feed, Icon } from 'semantic-ui-react'

const FeedExampleIconLabel = () => (
  <Feed>
    <Feed.Event>
      <Feed.Label>
        <Icon name='pencil' />
      </Feed.Label>
      <Feed.Content>
        <Feed.Date>Today</Feed.Date>
        <Feed.Summary>
          You posted on your friend <a>Stevie Feliciano's</a> wall.
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  </Feed>
)

export default FeedExampleIconLabel
