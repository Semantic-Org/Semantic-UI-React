import React, { Component } from 'react'
import { Buttons, Button } from 'stardust'

export default class ButtonIconButtonsExample extends Component {
  render() {
    return (
      <Buttons>
        <Button className='icon'>
          <i className='save icon' />
        </Button>
        <Button className='icon'>
          <i className='delete icon' />
        </Button>
        <Button className='icon'>
          <i className='edit icon' />
        </Button>
      </Buttons>
    )
  }
}
