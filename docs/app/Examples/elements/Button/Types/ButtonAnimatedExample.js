import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonAnimatedExample extends Component {
  render() {
    return (
      <Button className='animated'>
        <div className='visible content'>Next</div>
        <div className='hidden content'>
          <i className='right arrow icon' />
        </div>
      </Button>
    )
  }
}
