import React, { Component } from 'react'
import { List } from 'stardust'

export default class ListHeaderExample extends Component {
  render() {
    return (
      <List>
        <List.Item header='Chapter 1' description='The chapter in which we meet the characters' />
        <List.Item header='Chapter 2' description='The chapter in which the bad guy is introduced' />
        <List.Item header='Chapter 3' description='Spoiler alert: The chapter in which the good guy wins!' />
        <List.Item>
          <List.ItemContent>
            <List.ItemHeader>
              Chapter 4
            </List.ItemHeader>
            <List.ItemDescription>
              This is an example of a sub-component.
            </List.ItemDescription>
          </List.ItemContent>
        </List.Item>
      </List>
    )
  }
}
