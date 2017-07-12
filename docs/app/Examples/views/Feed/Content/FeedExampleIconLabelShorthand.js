import React from 'react'
import { Feed } from 'semantic-ui-react'

const FeedExampleIconLabelShorthand = () => (
  <Feed>
    <Feed.Event
      icon='pencil'
      date='Today'
      summary="You posted on your friend Stevie Feliciano's wall."
    />

    <Feed.Event>
      <Feed.Label icon='pencil' />
      <Feed.Content
        date='Today'
        summary="You posted on your friend Stevie Feliciano's wall."
      />
    </Feed.Event>
  </Feed>
)

export default FeedExampleIconLabelShorthand
