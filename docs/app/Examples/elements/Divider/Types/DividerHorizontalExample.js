import React, { Component } from 'react'
import { Segment, Button, Divider } from 'stardust'

export default class DividerHorizontalExample extends Component {
  render() {
    return (
      <Segment padded>
        <Button className='primary fluid'>Login</Button>
        <Divider horizontal>Or</Divider>
        <Button className='secondary fluid'>Sign Up Now</Button>
      </Segment>
    )
  }
}
