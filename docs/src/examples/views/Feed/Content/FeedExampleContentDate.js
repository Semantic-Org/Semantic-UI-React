import React from 'react'
import { Feed } from 'semantic-ui-react'

const imageSrc = '/images/avatar/small/jenny.jpg'

const FeedExampleContentDate = () => (
  <Feed>
    <Feed.Event>
      <Feed.Label image={imageSrc} />
      <Feed.Content>
        <Feed.Date>3 days ago</Feed.Date>
        <Feed.Summary>
          You added <a>Jenny Hess</a> to your <a>coworker</a> group.
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  </Feed>
)

export default FeedExampleContentDate
