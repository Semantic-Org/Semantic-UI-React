import React from 'react'
import {
  FeedSummary,
  FeedLabel,
  FeedEvent,
  FeedContent,
  Feed,
} from 'semantic-ui-react'

const FeedExampleSummaryDate = () => (
  <Feed>
    <FeedEvent>
      <FeedLabel image='/images/avatar/small/jenny.jpg' />
      <FeedContent>
        <FeedSummary
          content='You added Jenny Hess to your coworker group.'
          date='3 days ago'
        />
      </FeedContent>
    </FeedEvent>
  </Feed>
)

export default FeedExampleSummaryDate
