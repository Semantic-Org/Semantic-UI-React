import React, { Component } from 'react'
import { Input } from 'stardust'

export default class InputSizeExample extends Component {
  render() {
    return (
      <div>
        <Input className='mini icon' icon='search' placeholder='Search...' />
        <br />
        <Input className='small icon' icon='search' placeholder='Search...' />
        <br />
        <Input className='large icon' icon='search' placeholder='Search...' />
        <br />
        <Input className='big icon' icon='search' placeholder='Search...' />
        <br />
        <Input className='huge icon' icon='search' placeholder='Search...' />
        <br />
        <Input className='massive icon' icon='search' placeholder='Search...' />
        <br />
      </div>
    )
  }
}
