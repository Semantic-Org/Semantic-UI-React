import React, { Component } from 'react'
import { Icon } from 'stardust'

export default class IconCornerGroupExample extends Component {
  render() {
    return (
      <Icon.Group size='huge'>
        <Icon className='puzzle' />
        <Icon corner className='add' />
      </Icon.Group>
    )
  }
}
