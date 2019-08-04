import React from 'react'
import { Feed } from 'semantic-ui-react'

const image = '/images/avatar/small/laura.jpg'
const date = '3 days ago'
const summary = 'Laura Faucet created a post'
const extraText = "Have you seen what's going on in Israel? Can you believe it."

const FeedExampleExtraTextShorthand = () => (
  <Feed>
    <Feed.Event
      image={image}
      date={date}
      summary={summary}
      extraText={extraText}
    />

    <Feed.Event>
      <Feed.Label image={image} />
      <Feed.Content date={date} summary={summary} extraText={extraText} />
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image={image} />
      <Feed.Content>
        <Feed.Date content={date} />
        <Feed.Summary content={summary} />
        <Feed.Extra text content={extraText} />
      </Feed.Content>
    </Feed.Event>
  </Feed>
)

export default FeedExampleExtraTextShorthand
