import React from 'react'
import {
  FeedUser,
  FeedSummary,
  FeedMeta,
  FeedLike,
  FeedLabel,
  FeedExtra,
  FeedEvent,
  FeedDate,
  FeedContent,
  Feed,
  Icon,
} from 'semantic-ui-react'

const FeedExampleSizeLarge = () => (
  <Feed size='large'>
    <FeedEvent>
      <FeedLabel image='/images/avatar/small/elliot.jpg' />
      <FeedContent>
        <FeedSummary>
          <FeedUser>Elliot Fu</FeedUser> added you as a friend
          <FeedDate>1 Hour Ago</FeedDate>
        </FeedSummary>
        <FeedMeta>
          <FeedLike>
            <Icon name='like' />4 Likes
          </FeedLike>
        </FeedMeta>
      </FeedContent>
    </FeedEvent>

    <FeedEvent>
      <FeedLabel icon='pencil' />
      <FeedContent>
        <FeedSummary>
          You submitted a new post to the page
          <FeedDate>3 days ago</FeedDate>
        </FeedSummary>
        <FeedExtra text>
          I'm having a BBQ this weekend. Come by around 4pm if you can.
        </FeedExtra>
        <FeedMeta>
          <FeedLike>11 Likes</FeedLike>
        </FeedMeta>
      </FeedContent>
    </FeedEvent>

    <FeedEvent>
      <FeedLabel image='/images/avatar/small/helen.jpg' />
      <FeedContent>
        <FeedDate>4 days ago</FeedDate>
        <FeedSummary>
          <a>Helen Troy</a> added <a>2 new illustrations</a>
        </FeedSummary>

        <FeedExtra images>
          <a>
            <img src='/images/wireframe/image.png' />
          </a>
          <a>
            <img src='/images/wireframe/image.png' />
          </a>
        </FeedExtra>

        <FeedMeta like='1 Like' />
      </FeedContent>
    </FeedEvent>
  </Feed>
)

export default FeedExampleSizeLarge
