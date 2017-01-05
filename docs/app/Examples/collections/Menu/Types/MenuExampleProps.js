import React, { Component } from 'react'
import { Menu } from 'semantic-ui-react'

export default class MenuExampleProps extends Component {
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
