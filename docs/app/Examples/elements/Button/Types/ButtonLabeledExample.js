import React, { Component } from 'react'
import { Button, Label } from 'stardust'

export default class ButtonLabeledExample extends Component {
  render() {
    return (
      <Button labeled icon='heart'>
          Like
        {/* TODO: See issue #46 - button needs to render as a div */}
        <Label basic link>
          3,000
        </Label>
      </Button>
    )
  }
}
