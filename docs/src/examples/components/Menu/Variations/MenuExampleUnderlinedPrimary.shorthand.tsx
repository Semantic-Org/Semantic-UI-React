import React from 'react'
import { Menu } from 'stardust'

const items = [
  { key: 'editorials', content: 'Editorials' },
  { key: 'review', content: 'Reviews' },
  { key: 'events', content: 'Upcoming Events' },
]

class MenuExampleUnderlinedPrimaryShorthand extends React.Component {
  render() {
    return <Menu defaultActiveIndex={0} items={items} shape="underlined" type="primary" />
  }
}

export default MenuExampleUnderlinedPrimaryShorthand
