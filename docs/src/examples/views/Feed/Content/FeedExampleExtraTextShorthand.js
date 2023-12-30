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

const image = '/images/avatar/small/laura.jpg'
const date = '3 days ago'
const summary = 'Laura Faucet created a post'
const extraText = "Have you seen what's going on in Israel? Can you believe it."

const FeedExampleExtraTextShorthand = () => (
  <Feed>
    <FeedEvent
      image={image}
      date={date}
      summary={summary}
      extraText={extraText}
    />

    <FeedEvent>
      <FeedLabel image={image} />
      <FeedContent date={date} summary={summary} extraText={extraText} />
    </FeedEvent>

    <FeedEvent>
      <FeedLabel image={image} />
      <FeedContent>
        <FeedDate content={date} />
        <FeedSummary content={summary} />
        <FeedExtra text content={extraText} />
      </FeedContent>
    </FeedEvent>
  </Feed>
)

export default FeedExampleExtraTextShorthand
