import React, { Component } from 'react'
import { List } from 'stardust'

export default class ListLinkExample extends Component {
  render() {
    const link1 = <a>What is a FAQ?</a>
    const link2 = <a>Who is our user base?</a>
    const link3 = <a>Where is our office located?</a>
    return (
      <List>
        <List.Item description={link1} />
        <List.Item description={link2} />
        <List.Item description={link3} />
      </List>
    )
  }
}
