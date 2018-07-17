import React from 'react'
import _ from 'lodash'
import { Menu, MenuItem } from 'stardust'

const items = [
  { key: 'editorials', content: 'Editorials' },
  { key: 'review', content: 'Reviews' },
  { key: 'events', content: 'Upcoming Events' },
]

class MenuExampleUnderlined extends React.Component {
  state = { activeIndex: 0 }

  handleItemClick = activeIndex => () => {
    this.setState({ activeIndex })
  }

  render() {
    const { activeIndex } = this.state
    return (
      <Menu defaultActiveIndex={0} shape="underlined">
        {_.times(3, i => {
          return (
            <MenuItem
              key={items[i].key}
              content={items[i].content}
              shape="underlined"
              active={activeIndex === i}
              onClick={this.handleItemClick(i)}
            />
          )
        })}
      </Menu>
    )
  }
}

export default MenuExampleUnderlined
