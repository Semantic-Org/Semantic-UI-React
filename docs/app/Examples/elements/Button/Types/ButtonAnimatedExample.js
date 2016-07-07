import React, { Component } from 'react'
import { Button, Icon } from 'stardust'

export default class ButtonAnimatedExample extends Component {
  render() {
    return (
      <Button className='animated'>
        <div className='visible content'>Next</div>
        <div className='hidden content'>
          <Icon name='right arrow' />
        </div>
      </Button>
    )
  }
}
