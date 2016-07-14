import React, { Component } from 'react'
import { Buttons, Button, Icon } from 'stardust'

export default class ButtonIconButtonsExample extends Component {
  render() {
    return (
      <Buttons>
        <Button className='icon'>
          <Icon name='save' />
        </Button>
        <Button className='icon'>
          <Icon name='delete' />
        </Button>
        <Button className='icon'>
          <Icon name='edit' />
        </Button>
      </Buttons>
    )
  }
}
