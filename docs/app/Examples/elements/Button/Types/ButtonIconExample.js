import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonIconExample extends Component {
  render() {
    return (
      <Button className='icon'>
        <i className='world icon' />
      </Button>
    )
  }
}
