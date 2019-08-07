import React from 'react'
import { Feed } from 'semantic-ui-react'

const FeedExampleSummaryDate = () => (
  <Feed>
    <Feed.Event>
      <Feed.Label image='/images/avatar/small/jenny.jpg' />
      <Feed.Content>
        <Feed.Summary
          content='You added Jenny Hess to your coworker group.'
          date='3 days ago'
        />
      </Feed.Content>
    </Feed.Event>
  </Feed>
)

export default FeedExampleSummaryDate
