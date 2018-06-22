import React from 'react'
import { Feed } from 'semantic-ui-react'

const image = '/images/avatar/small/jenny.jpg'
const date = '3 days ago'
const summary = 'You added Jenny Hess to your coworker group.'

const FeedExampleContentDateShorthand = () => (
  <Feed>
    <Feed.Event image={image} date={date} summary={summary} />

    <Feed.Event>
      <Feed.Label image={image} />
      <Feed.Content date={date} summary={summary} />
    </Feed.Event>
  </Feed>
)

export default FeedExampleContentDateShorthand
