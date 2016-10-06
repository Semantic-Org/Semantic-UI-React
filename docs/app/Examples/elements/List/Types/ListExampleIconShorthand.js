import React from 'react'
import { List } from 'semantic-ui-react'

const items = [
  { icon: 'users', content: 'Semantic UI' },
  { icon: 'marker', content: 'New York, NY' },
  { icon: 'mail', content: <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a> },
  { icon: 'linkify', content: <a href='http://www.semantic-ui.com'>semantic-ui.com</a> },
]

const ListExampleIconShorthand = () => (
  <List items={items} />
)

export default ListExampleIconShorthand
