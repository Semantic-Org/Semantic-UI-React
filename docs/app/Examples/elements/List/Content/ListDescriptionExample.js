import React, { Component } from 'react'
import { Icon, List } from 'stardust'

export default class ListDescriptionExample extends Component {
  render() {
    const mapIcon = <Icon className='map marker' />

    return (
      <List>
        <List.Item
          icon={mapIcon}
          header='Chicago'
          description='This city is located in the state of Illinois'
        />
        <List.Item
          icon={mapIcon}
          header='Nashville'
          description='This city is located in the state of Tennessee'
        />
        <List.Item>
          <List.ItemIcon className='user' />
          <List.ItemContent>
            <List.ItemHeader>Daniel Louise</List.ItemHeader>
            <List.ItemDescription>
              This is an example of using sub-components.
            </List.ItemDescription>
          </List.ItemContent>
        </List.Item>
      </List>
    )
  }
}
