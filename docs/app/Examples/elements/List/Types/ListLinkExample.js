import React, { Component } from 'react'
import { List } from 'stardust'

export default class ListLinkExample extends Component {
  render() {
    const link1 = <a>Home</a>
    const link2 = <a>About</a>
    const link3 = <a>Services</a>
    const link4 = <a>Careers</a>
    return (
      <List className='link'>
        <List.Item className='active' description={link1} />
        <List.Item description={link2} />
        <List.Item description={link3} />
        <List.Item description={link4} />
      </List>
    )
  }
}
