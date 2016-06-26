import React, { Component } from 'react'
import { Icon } from 'stardust'

export default class IconIconGroupExample extends Component {
  render() {
    return (
      <Icon.Group size='huge'>
        <Icon size='big' className='thin circle' />
        <Icon className='user' />
      </Icon.Group>
    )
  }
}
