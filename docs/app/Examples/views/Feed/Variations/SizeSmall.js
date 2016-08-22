import React from 'react'
import { Feed, Header } from 'stardust'

const { Content, Event, Summary } = Feed

const SizeSmall = () => {
  return (
    <Feed size='small'>
      <Header as='h4'>Followers Activity</Header>

      <Event>
        <Content>
          <Summary>
            <a>Elliot Fu</a> added <a>Jenny Hess</a> as a friend
          </Summary>
        </Content>
      </Event>

      <Event>
        <Content>
          <Summary>
            <a>Stevie Feliciano</a> added <a>Elliot Fu</a> as a friend
          </Summary>
        </Content>
      </Event>

      <Event>
        <Content>
          <Summary>
            <a>Helen Troy</a> added <a>Christian Rocha</a> as a friend
          </Summary>
        </Content>
      </Event>

      <Event>
        <Content>
          <Summary>
            <a>Christian Rocha</a> signed up for the  site.
          </Summary>
        </Content>
      </Event>
    </Feed>
  )
}

export default SizeSmall
