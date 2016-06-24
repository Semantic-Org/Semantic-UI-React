import React, { Component } from 'react'
import { Segment, Button, Divider } from 'stardust'

export default class DividerClearingExample extends Component {
  render() {
    return (
      <Segment>
        <Button floated='right'>Floated Button</Button>
        <Divider clearing />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
      </Segment>
    )
  }
}
