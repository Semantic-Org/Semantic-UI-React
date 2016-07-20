import React, { Component } from 'react'
import { Button, Icon, Input } from 'stardust'

export default class InputActionExtraExample extends Component {
  render() {
    return (
      <Input className='left action' placeholder='$23.43'>
        <Button className='teal labeled icon'>
          <Icon name='cart' />
          Checkout
        </Button>
      </Input>
    )
  }
}
