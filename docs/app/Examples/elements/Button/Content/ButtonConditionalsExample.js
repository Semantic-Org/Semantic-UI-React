import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonConditionalsExample extends Component {
  render() {
    return (
      <Button.Group>
        <Button>Cancel</Button>
        <div className='or' />
        <Button className='positive'>Save</Button>
      </Button.Group>
    )
  }
}
