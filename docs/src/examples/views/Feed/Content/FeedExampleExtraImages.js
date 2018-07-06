import React from 'react'
import { Feed } from 'semantic-ui-react'

const FeedExampleAdditionalInformation = () => (
  <Feed>
    <Feed.Event>
      <Feed.Label image='/images/avatar/small/helen.jpg' />
      <Feed.Content>
        <Feed.Date>3 days ago</Feed.Date>
        <Feed.Summary>
          <a>Helen Troy</a> added 2 photos
        </Feed.Summary>
        <Feed.Extra images>
          <a>
            <img src='/images/wireframe/image.png' />
          </a>
          <a>
            <img src='/images/wireframe/image.png' />
          </a>
        </Feed.Extra>
      </Feed.Content>
    </Feed.Event>
  </Feed>
)

export default FeedExampleAdditionalInformation
