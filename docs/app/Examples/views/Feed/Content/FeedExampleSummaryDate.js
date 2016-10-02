import React from 'react'
import { Feed } from 'stardust'

const FeedExampleSummaryDate = () => (
  <Feed>
    <Feed.Event>
      <Feed.Label>
        <img src='http://semantic-ui.com/images/avatar/small/jenny.jpg' />
      </Feed.Label>
      <Feed.Content>
        <Feed.Summary>
          You added <a>Jenny Hess</a> to your <a>coworker</a> group.

          <Feed.Date>3 days ago</Feed.Date>
        </Feed.Summary>
      </Feed.Content>
    </Feed.Event>
  </Feed>
)

export default FeedExampleSummaryDate
