import React from 'react'
import { Feed } from 'semantic-ui-react'

const image = '/assets/images/avatar/small/helen.jpg'
const date = '3 days ago'
const summary = 'Helen Troy added 2 photos'
const extraImages = [
  '/assets/images/wireframe/image.png',
  '/assets/images/wireframe/image-text.png',
]

const FeedExampleExtraImagesShorthand = () => (
  <Feed>
    <Feed.Event
      image={image}
      date={date}
      summary={summary}
      extraImages={extraImages}
    />

    <Feed.Event>
      <Feed.Label image={image} />
      <Feed.Content date={date} summary={summary} extraImages={extraImages} />
    </Feed.Event>

    <Feed.Event>
      <Feed.Label image={image} />
      <Feed.Content>
        <Feed.Date content={date} />
        <Feed.Summary content={summary} />
        <Feed.Extra images={extraImages} />
      </Feed.Content>
    </Feed.Event>
  </Feed>
)

export default FeedExampleExtraImagesShorthand
