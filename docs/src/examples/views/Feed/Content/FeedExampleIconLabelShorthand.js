import React from 'react'
import { FeedLabel, FeedEvent, FeedContent, Feed } from 'semantic-ui-react'

const FeedExampleIconLabelShorthand = () => (
  <Feed>
    <FeedEvent
      icon='pencil'
      date='Today'
      summary="You posted on your friend Stevie Feliciano's wall."
    />

    <FeedEvent>
      <FeedLabel icon='pencil' />
      <FeedContent
        date='Today'
        summary="You posted on your friend Stevie Feliciano's wall."
      />
    </FeedEvent>
  </Feed>
)

export default FeedExampleIconLabelShorthand
