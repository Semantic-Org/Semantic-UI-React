import React, { Component } from 'react'
import { List } from 'stardust'

export default class ListItemExample extends Component {
  render() {
    return (
      <List>
        <List.Item description='1' />
        <List.Item description='2' />
        <List.Item description='3' />
      </List>
    )
  }
}
