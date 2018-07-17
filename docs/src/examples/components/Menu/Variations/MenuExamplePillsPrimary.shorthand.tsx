import React from 'react'
import { Menu } from 'stardust'

const items = [
  { key: 'editorials', content: 'Editorials' },
  { key: 'review', content: 'Reviews' },
  { key: 'events', content: 'Upcoming Events' },
]

class MenuExamplePillsPrimaryShorthand extends React.Component {
  render() {
    return <Menu defaultActiveIndex={0} items={items} shape="pills" type="primary" />
  }
}

export default MenuExamplePillsPrimaryShorthand
