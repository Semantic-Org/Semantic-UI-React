import React, { Component } from 'react'
import { Icon, List } from 'stardust'

export default class ListIconExample extends Component {
  render() {
    const helpIcon = <Icon className='help' />
    const triangleIcon = <Icon className='right triangle' />

    return (
      <List>
        <List.Item
          icon={helpIcon}
          header='Floated Icon'
          description='This text will always have a left margin so it sits alongside the icon'
        />
        <List.Item
          icon={triangleIcon}
          header='Icon Alignment'
          description='Floated icons are by default top aligned'
        />
        <List.Item icon={helpIcon}>
          This item uses <code>child</code> text, check the code.
        </List.Item>
        <List.Item>
          <List.ItemIcon className='right triangle' />
          <List.ItemContent>
            This is an example of using sub-components
          </List.ItemContent>
        </List.Item>
      </List>
    )
  }
}
