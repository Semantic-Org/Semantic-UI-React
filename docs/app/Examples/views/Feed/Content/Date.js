import React from 'react'
import { Feed } from 'stardust'

const imageSrc = 'http://semantic-ui.com/images/avatar/small/jenny.jpg'

const Date = () => {
  return (
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

      <Feed.Event>
        <Feed.Label image={imageSrc} />
        <Feed.Content>
          <Feed.Date date='3 days ago' />
          <Feed.Summary>
            You added <a>Jenny Hess</a> to your <a>coworker</a> group.
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Label image={imageSrc} />
        <Feed.Content date='3 days ago'>
          <Feed.Summary>
            You added <a>Jenny Hess</a> to your <a>coworker</a> group.
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event>
        <Feed.Label image={imageSrc} />
        <Feed.Content
          date='3 days ago'
          summary='You added Jenny Hess to your coworker group.'
        />
      </Feed.Event>
    </Feed>
  )
}

export default Date
