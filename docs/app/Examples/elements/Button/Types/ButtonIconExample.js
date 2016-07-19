import React, { Component } from 'react'
import { Button, Icon } from 'stardust'

export default class ButtonIconExample extends Component {
  render() {
    return (
      <Button className='icon'>
        <Icon name='world' />
      </Button>
    )
  }
}
