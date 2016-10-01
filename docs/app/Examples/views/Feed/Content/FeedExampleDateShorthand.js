import React from 'react'
import { Feed } from 'stardust'

const imageSrc = 'http://semantic-ui.com/images/avatar/small/jenny.jpg'

const FeedExampleDateShorthand = () => (
  <Feed>
    <Feed.Event
      image={imageSrc}
      date='3 days ago'
      summary='You added Jenny Hess to your coworker group.'
    />

    <Feed.Event>
      <Feed.Label image={imageSrc} />
      <Feed.Content
        date='3 days ago'
        summary='You added Jenny Hess to your coworker group.'
      />
    </Feed.Event>
  </Feed>
)

export default FeedExampleDateShorthand
