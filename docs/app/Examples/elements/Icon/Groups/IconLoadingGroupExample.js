import React, { Component } from 'react'
import { Icon } from 'stardust'

export default class IconLoadingGroupExample extends Component {
  render() {
    return (
      <div>
        <Icon.Group size='huge'>
          <Icon size='big' color='red' className='dont' />
          <Icon color='black' className='use' />
        </Icon.Group>
        <Icon.Group size='huge'>
          <Icon loading size='big' className='sun' />
          <Icon className='user' />
        </Icon.Group>
      </div>
    )
  }
}
