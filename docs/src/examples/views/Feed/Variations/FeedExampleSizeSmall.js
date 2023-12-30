import React from 'react'
import {
  FeedSummary,
  FeedEvent,
  FeedContent,
  Feed,
  Header,
} from 'semantic-ui-react'

const FeedExampleSizeSmall = () => (
  <Feed size='small'>
    <Header as='h4'>Followers Activity</Header>

    <FeedEvent>
      <FeedContent>
        <FeedSummary>
          <a>Elliot Fu</a> added <a>Jenny Hess</a> as a friend
        </FeedSummary>
      </FeedContent>
    </FeedEvent>

    <FeedEvent>
      <FeedContent>
        <FeedSummary>
          <a>Stevie Feliciano</a> added <a>Elliot Fu</a> as a friend
        </FeedSummary>
      </FeedContent>
    </FeedEvent>

    <FeedEvent>
      <FeedContent>
        <FeedSummary>
          <a>Helen Troy</a> added <a>Christian Rocha</a> as a friend
        </FeedSummary>
      </FeedContent>
    </FeedEvent>

    <FeedEvent>
      <FeedContent>
        <FeedSummary>
          <a>Christian Rocha</a> signed up for the site.
        </FeedSummary>
      </FeedContent>
    </FeedEvent>
  </Feed>
)

export default FeedExampleSizeSmall
