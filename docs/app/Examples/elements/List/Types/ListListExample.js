import React, { Component } from 'react'
import { List } from 'stardust'

export default class ListListExample extends Component {
  render() {
    return (
      <List>
        <List.Item description='Apples' />
        <List.Item description='Pears' />
        <List.Item description='Oranges' />
      </List>
    )
  }
}
