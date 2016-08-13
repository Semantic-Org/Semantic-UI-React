import React from 'react'
import { Feed } from 'stardust'

const { Content, Date, Event, Label, Summary } = Feed
const imageSrc = 'http://semantic-ui.com/images/avatar/small/jenny.jpg'

const DateSummary = () => {
  return (
    <Feed>
      <Event>
        <Label image={imageSrc} />
        <Content>
          <Summary>
            You added <a>Jenny Hess</a> to your <a>coworker</a> group.

            <Date>3 days ago</Date>
          </Summary>
        </Content>
      </Event>

      <Event>
        <Label image={imageSrc} />
        <Content>
          <Summary>
            You added <a>Jenny Hess</a> to your <a>coworker</a> group.

            <Date date='3 days ago' />
          </Summary>
        </Content>
      </Event>

      <Event>
        <Label image={imageSrc} />
        <Content>
          <Summary date='3 days ago'>
            You added <a>Jenny Hess</a> to your <a>coworker</a> group.
          </Summary>
        </Content>
      </Event>
    </Feed>
  )
}

export default DateSummary
