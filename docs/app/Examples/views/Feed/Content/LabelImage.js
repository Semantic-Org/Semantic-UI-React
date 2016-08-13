import React from 'react'
import { Feed } from 'stardust'

const image = <img src='http://semantic-ui.com/images/avatar/small/elliot.jpg' />

const LabelImage = () => {
  return (
    <div>
      <Feed>
        <Feed.Event>
          <Feed.Label>
            <img src='http://semantic-ui.com/images/avatar/small/elliot.jpg' />
          </Feed.Label>
          <Feed.Content>
            You added Elliot Fu to the group <a>Coworkers</a>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event image='http://semantic-ui.com/images/avatar/small/elliot.jpg'>
          <Feed.Content>
            You added Elliot Fu to the group <a>Coworkers</a>
          </Feed.Content>
        </Feed.Event>

        <Feed.Event image={image}>
          <Feed.Content>
            You added Elliot Fu to the group <a>Coworkers</a>
          </Feed.Content>
        </Feed.Event>
      </Feed>
    </div>
  )
}

export default LabelImage
