import React, { Component } from 'react'
import { Button, Input } from 'stardust'

export default class InputActionExtraExample extends Component {
  render() {
    return (
      <Input className='left action' placeholder='$23.43'>
        <Button className='ui teal labeled icon button'>
          <i className='cart icon' />
          Checkout
        </Button>
      </Input>
    )
  }
}
