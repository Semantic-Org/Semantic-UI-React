import React, { Component } from 'react'
import { Input } from 'stardust'

export default class InputLoadingExample extends Component {
  render() {
    return (
      <Input className='left icon loading' icon='user' placeholder='Search...' />
    )
  }
}
