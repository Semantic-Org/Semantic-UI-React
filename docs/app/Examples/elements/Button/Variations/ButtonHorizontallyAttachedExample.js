import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonHorizontallyAttachedExample extends Component {
  render() {
    return (
      <div>
        <Button className='left attached'>Left</Button>
        <Button className='right attached'>Right</Button>
      </div>
    )
  }
}
