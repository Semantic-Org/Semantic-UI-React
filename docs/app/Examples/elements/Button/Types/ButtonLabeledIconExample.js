import React, { Component } from 'react'
import { Button, Icon } from 'stardust'

export default class ButtonLabeledIconExample extends Component {
  render() {
    return (
      <div>
        <Button className='labeled icon'>
          <Icon name='pause' />
          Pause
        </Button>
        <Button className='right labeled icon'>
          <Icon name='right arrow' />
          Next
        </Button>
      </div>
    )
  }
}
