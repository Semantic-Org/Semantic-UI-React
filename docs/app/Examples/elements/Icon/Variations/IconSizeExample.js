import React, { Component } from 'react'
import { Icon } from 'stardust'

export default class IconSizeExample extends Component {
  render() {
    return (
      <div>
        <Icon className='home' size='mini' />
        <Icon className='home' size='tiny' />
        <Icon className='home' size='small' />
        <Icon className='home' size='small' />
        <br />
        <Icon className='home' />
        <br />
        <Icon className='home' size='large' />
        <br />
        <Icon className='home' size='big' />
        <br />
        <Icon className='home' size='huge' />
        <br />
        <Icon className='home' size='massive' />
      </div>
    )
  }
}
