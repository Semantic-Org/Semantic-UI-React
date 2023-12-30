import React from 'react'
import {
  FeedSummary,
  FeedLabel,
  FeedExtra,
  FeedEvent,
  FeedDate,
  FeedContent,
  Feed,
} from 'semantic-ui-react'

const FeedExampleExtraText = () => (
  <Feed>
    <FeedEvent>
      <FeedLabel image='/images/avatar/small/laura.jpg' />
      <FeedContent>
        <FeedDate>3 days ago</FeedDate>
        <FeedSummary>
          <a>Laura Faucet</a> created a post
        </FeedSummary>
        <FeedExtra text>
          Have you seen what's going on in Israel? Can you believe it.
        </FeedExtra>
      </FeedContent>
    </FeedEvent>
  </Feed>
)

export default FeedExampleExtraText
