import React from 'react'
import { Icon, List } from 'stardust'

const ListIcons = () => {
  return (
    <List>
      <List.Item>
        <Icon name='users' />
        <List.Content>Semantic UI</List.Content>
      </List.Item>
      <List.Item>
        <Icon name='marker' />
        <List.Content>New York, NY</List.Content>
      </List.Item>
      <List.Item>
        <Icon name='mail' />
        <List.Content>
          <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
        </List.Content>
      </List.Item>
      <List.Item>
        <Icon name='linkify' />
        <List.Content>
          <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
        </List.Content>
      </List.Item>
    </List>
  )
}

export default ListIcons
