import React from 'react'
import { Feed } from 'stardust'

const LabelImage = () => {
  return (
    <Feed>
      <Feed.Event>
        <Feed.Label icon='pencil' />
        <Feed.Content>
          <Feed.Summary>
            You posted on your friend <a>Stevie Feliciano's</a> wall.
            <Feed.Date>Today</Feed.Date>
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>

      <Feed.Event icon='pencil'>
        <Feed.Content>
          <Feed.Summary>
            You posted on your friend <a>Stevie Feliciano's</a> wall.
            <Feed.Date>Today</Feed.Date>
          </Feed.Summary>
        </Feed.Content>
      </Feed.Event>
    </Feed>
  )
}

export default LabelImage
