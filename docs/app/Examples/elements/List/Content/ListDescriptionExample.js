import React, { Component } from 'react'
import { List } from 'stardust'

export default class ListDescriptionExample extends Component {
  render() {
    const mapIcon = <i className='map marker icon' />

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
      </List>
    )
  }
}
