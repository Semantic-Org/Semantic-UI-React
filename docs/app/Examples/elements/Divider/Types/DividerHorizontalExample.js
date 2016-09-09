import React, { Component } from 'react'
import { Segment, Button, Divider } from 'stardust'

export default class DividerHorizontalExample extends Component {
  render() {
    return (
      <Segment padded>
        <Button primary fluid>Login</Button>
        <Divider horizontal>Or</Divider>
        <Button secondary fluid>Sign Up Now</Button>
      </Segment>
    )
  }
}
