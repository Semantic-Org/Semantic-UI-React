import React from 'react'
import { Image, List } from 'stardust'

const ListExampleVerticallyAligned = () => (
  <List horizontal>
    <List.Item>
      <Image avatar src='http://semantic-ui.com/images/wireframe/square-image.png' />
      <List.Content verticalAlign='top'>
        Top Aligned
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='http://semantic-ui.com/images/wireframe/square-image.png' />
      <List.Content verticalAlign='middle'>
        Middle
      </List.Content>
    </List.Item>
    <List.Item>
      <Image avatar src='http://semantic-ui.com/images/wireframe/square-image.png' />
      <List.Content verticalAlign='bottom'>
        Bottom
      </List.Content>
    </List.Item>
  </List>
)

export default ListExampleVerticallyAligned
