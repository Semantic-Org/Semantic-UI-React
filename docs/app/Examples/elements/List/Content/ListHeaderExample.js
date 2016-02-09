import React, { Component } from 'react'
import { List, ListItem } from 'stardust'

export default class ListHeaderExample extends Component {
  render() {
    return (
      <List>
        <ListItem header='Chapter 1' description='The chapter in which we meet the characters' />
        <ListItem header='Chapter 2' description='The chapter in which the bad guy is introduced' />
        <ListItem header='Chapter 3' description='Spoiler alert: The chapter in which the good guy wins!'/>
      </List>
    )
  }
}
