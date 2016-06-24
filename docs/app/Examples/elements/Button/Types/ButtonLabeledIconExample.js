import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonLabeledIconExample extends Component {
  render() {
    return (
      <div>
        <Button labeled='icon' icon='pause'>
          Pause
        </Button>
        <Button labeled='right icon' icon='right arrow'>
          Next
        </Button>
      </div>
    )
  }
}
