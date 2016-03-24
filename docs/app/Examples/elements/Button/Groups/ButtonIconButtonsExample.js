import React, { Component } from 'react'
import { Buttons, Button, Icon } from 'stardust'

export default class ButtonIconButtonsExample extends Component {
  render() {
    return (
      <Buttons>
        <Button className='icon'>
          <Icon className='save' />
        </Button>
        <Button className='icon'>
          <Icon className='delete' />
        </Button>
        <Button className='icon'>
          <Icon className='edit' />
        </Button>
      </Buttons>
    )
  }
}
