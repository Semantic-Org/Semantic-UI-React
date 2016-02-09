import React, { Component } from 'react'
import { Segment, Button, Divider } from 'stardust'

export default class DividerClearingExample extends Component {
  render() {
    return (
      <Segment>
        <Button className='right floated'>Floated Button</Button>
        <Divider className='clearing' />
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...
      </Segment>
    )
  }
}
