import React, { Component } from 'react'
import { Button, Icon } from 'stardust'

export default class ButtonCircularExample extends Component {
  render() {
    return (
      <Button className='circular icon'>
        <Icon name='heart' />
      </Button>
    )
  }
}
