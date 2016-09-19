import React, { Component } from 'react'
import { Menu } from 'stardust'

export default class Props extends Component {
  state = {}

  render() {
    const items = [
      { active: true, name: 'Editorials' },
      { name: 'Reviews' },
      { name: 'Upcoming Events' },
    ]

    return <Menu items={items} />
  }
}
