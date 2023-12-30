import React from 'react'
import {
  FeedSummary,
  FeedLabel,
  FeedEvent,
  FeedDate,
  FeedContent,
  Feed,
} from 'semantic-ui-react'

const imageSrc = '/images/avatar/small/jenny.jpg'

const FeedExampleContentDate = () => (
  <Feed>
    <FeedEvent>
      <FeedLabel image={imageSrc} />
      <FeedContent>
        <FeedDate>3 days ago</FeedDate>
        <FeedSummary>
          You added <a>Jenny Hess</a> to your <a>coworker</a> group.
        </FeedSummary>
      </FeedContent>
    </FeedEvent>
  </Feed>
)

export default FeedExampleContentDate
