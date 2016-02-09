import React, { Component } from 'react'
import { List, ListItem } from 'stardust'

export default class ListItemExample extends Component {
  render() {
    return (
      <List>
        <ListItem description='1' />
        <ListItem description='2' />
        <ListItem description='3' />
      </List>
    )
  }
}
