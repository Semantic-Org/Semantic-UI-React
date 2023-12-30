import React from 'react'
import {
  FeedSummary,
  FeedLabel,
  FeedEvent,
  FeedDate,
  FeedContent,
  Feed,
} from 'semantic-ui-react'

const FeedExampleSummaryDate = () => (
  <Feed>
    <FeedEvent>
      <FeedLabel>
        <img src='/images/avatar/small/jenny.jpg' />
      </FeedLabel>
      <FeedContent>
        <FeedSummary>
          You added <a>Jenny Hess</a> to your <a>coworker</a> group.
          <FeedDate>3 days ago</FeedDate>
        </FeedSummary>
      </FeedContent>
    </FeedEvent>
  </Feed>
)

export default FeedExampleSummaryDate
