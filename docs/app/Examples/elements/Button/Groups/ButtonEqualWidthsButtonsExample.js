import React, { Component } from 'react'
import { Button } from 'stardust'

export default class ButtonEqualWidthsButtonsExample extends Component {
  render() {
    return (
      <div>
        <Button.Group widths='five'>
          <Button>Overview</Button>
          <Button>Specs</Button>
          <Button>Warrantee</Button>
          <Button>Reviews</Button>
          <Button>Support</Button>
        </Button.Group>
        <Button.Group widths='three'>
          <Button>Overview</Button>
          <Button>Specs</Button>
          <Button>Support</Button>
        </Button.Group>
      </div>
    )
  }
}
