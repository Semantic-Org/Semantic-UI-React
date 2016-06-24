import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonHorizontallyAttachedExample extends Component {
  render() {
    return (
      <div>
        <Button attached='left'>Left</Button>
        <Button attached='right'>Right</Button>
      </div>
    )
  }
}
