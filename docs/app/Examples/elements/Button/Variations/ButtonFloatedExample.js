import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonFloatedExample extends Component {
  render() {
    return (
      <div>
        <Button floated='right'>Right Floated</Button>
        <Button floated='left'>Left Floated</Button>
      </div>
    )
  }
}
