import React from 'react'
import { FeedLabel, FeedEvent, FeedContent, Feed } from 'semantic-ui-react'

const image = '/images/avatar/small/jenny.jpg'
const date = '3 days ago'
const summary = 'You added Jenny Hess to your coworker group.'

const FeedExampleContentDateShorthand = () => (
  <Feed>
    <FeedEvent image={image} date={date} summary={summary} />

    <FeedEvent>
      <FeedLabel image={image} />
      <FeedContent date={date} summary={summary} />
    </FeedEvent>
  </Feed>
)

export default FeedExampleContentDateShorthand
