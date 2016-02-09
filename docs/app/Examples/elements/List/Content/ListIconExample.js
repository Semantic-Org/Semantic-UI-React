import React, { Component } from 'react'
import { List, ListItem } from 'stardust'

export default class ListIconExample extends Component {
  render() {
    const helpIcon = <i className='help icon' />
    const triangleIcon = <i className='right triangle icon' />

    return (
      <List>
        <ListItem
          icon={helpIcon}
          header='Floated Icon'
          description='This text will always have a left margin so it sits alongside the icon'
        />
        <ListItem
          icon={triangleIcon}
          header='Icon Alignment'
          description='Floated icons are by default top aligned'
        />
        <ListItem icon={helpIcon}>
          This item uses <code>child</code> text, check the code.
        </ListItem>
      </List>
    )
  }
}
