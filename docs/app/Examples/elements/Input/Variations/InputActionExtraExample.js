import React, { Component } from 'react'
import { Button, Input } from 'stardust'

export default class InputActionExtraExample extends Component {
  render() {
    return (
      <Input className='left action' placeholder='$23.43'>
        <Button labeled color='teal' icon='cart'>
          Checkout
        </Button>
      </Input>
    )
  }
}
