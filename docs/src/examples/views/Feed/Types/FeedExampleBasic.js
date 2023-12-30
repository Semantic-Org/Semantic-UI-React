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

const FeedExampleBasic = () => (
  <Feed>
    <FeedEvent>
      <FeedLabel>
        <img src='/images/avatar/small/elliot.jpg' />
      </FeedLabel>
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
      <FeedLabel image='/images/avatar/small/helen.jpg' />
      <FeedContent>
        <FeedSummary>
          <a>Helen Troy</a> added <a>2 new illustrations</a>
          <FeedDate>4 days ago</FeedDate>
        </FeedSummary>
        <FeedExtra images>
          <a>
            <img src='/images/wireframe/image.png' />
          </a>
          <a>
            <img src='/images/wireframe/image.png' />
          </a>
        </FeedExtra>
        <FeedMeta>
          <FeedLike>
            <Icon name='like' />1 Like
          </FeedLike>
        </FeedMeta>
      </FeedContent>
    </FeedEvent>

    <FeedEvent>
      <FeedLabel image='/images/avatar/small/jenny.jpg' />
      <FeedContent>
        <FeedSummary
          date='2 Days Ago'
          user='Jenny Hess'
          content='add you as a friend'
        />
        <FeedMeta>
          <FeedLike>
            <Icon name='like' />8 Likes
          </FeedLike>
        </FeedMeta>
      </FeedContent>
    </FeedEvent>

    <FeedEvent>
      <FeedLabel image='/images/avatar/small/joe.jpg' />
      <FeedContent>
        <FeedSummary>
          <a>Joe Henderson</a> posted on his page
          <FeedDate>3 days ago</FeedDate>
        </FeedSummary>
        <FeedExtra text>
          Ours is a life of constant reruns. We're always circling back to where
          we'd we started, then starting all over again. Even if we don't run
          extra laps that day, we surely will come back for more of the same
          another day soon.
        </FeedExtra>
        <FeedMeta>
          <FeedLike>
            <Icon name='like' />5 Likes
          </FeedLike>
        </FeedMeta>
      </FeedContent>
    </FeedEvent>

    <FeedEvent>
      <FeedLabel image='/images/avatar/small/justen.jpg' />
      <FeedContent>
        <FeedSummary>
          <a>Justen Kitsune</a> added <a>2 new photos</a> of you
          <FeedDate>4 days ago</FeedDate>
        </FeedSummary>
        <FeedExtra images>
          <a>
            <img src='/images/wireframe/image.png' />
          </a>
          <a>
            <img src='/images/wireframe/image.png' />
          </a>
        </FeedExtra>
        <FeedMeta>
          <FeedLike>
            <Icon name='like' />
            41 Likes
          </FeedLike>
        </FeedMeta>
      </FeedContent>
    </FeedEvent>
  </Feed>
)

export default FeedExampleBasic
