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

const image = '/images/avatar/small/helen.jpg'
const date = '3 days ago'
const summary = 'Helen Troy added 2 photos'
const extraImages = [
  '/images/wireframe/image.png',
  '/images/wireframe/image-text.png',
]

const FeedExampleExtraImagesShorthand = () => (
  <Feed>
    <FeedEvent
      image={image}
      date={date}
      summary={summary}
      extraImages={extraImages}
    />

    <FeedEvent>
      <FeedLabel image={image} />
      <FeedContent date={date} summary={summary} extraImages={extraImages} />
    </FeedEvent>

    <FeedEvent>
      <FeedLabel image={image} />
      <FeedContent>
        <FeedDate content={date} />
        <FeedSummary content={summary} />
        <FeedExtra images={extraImages} />
      </FeedContent>
    </FeedEvent>
  </Feed>
)

export default FeedExampleExtraImagesShorthand
