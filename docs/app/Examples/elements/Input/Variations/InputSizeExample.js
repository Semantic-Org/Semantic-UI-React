import React, { Component } from 'react'
import { Input } from 'stardust'

export default class InputSizeExample extends Component {
  render() {
    return (
      <div>
        <Input className='mini' icon='search' placeholder='Search...' />
        <br />
        <Input className='small' icon='search' placeholder='Search...' />
        <br />
        <Input className='large' icon='search' placeholder='Search...' />
        <br />
        <Input className='big' icon='search' placeholder='Search...' />
        <br />
        <Input className='huge' icon='search' placeholder='Search...' />
        <br />
        <Input className='massive' icon='search' placeholder='Search...' />
        <br />
      </div>
    )
  }
}
