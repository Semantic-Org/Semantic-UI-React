import React from 'react'
import { Menu } from '@stardust-ui/react'

const items = [
  { key: 'editorials', content: 'Editorials' },
  { key: 'review', content: 'Reviews' },
  { key: 'events', content: 'Upcoming Events' },
]

class MenuExamplePillsShorthand extends React.Component {
  render() {
    return <Menu defaultActiveIndex={0} items={items} shape="pills" />
  }
}

export default MenuExamplePillsShorthand
