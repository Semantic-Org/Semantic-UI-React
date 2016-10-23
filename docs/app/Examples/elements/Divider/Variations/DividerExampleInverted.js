import React, { Component } from 'react'
import { Segment, Divider } from 'semantic-ui-react'

export default class DividerExampleInverted extends Component {
  render() {
    return (
      <Segment inverted>
        <Divider inverted />
        <Divider horizontal inverted>Horizontal</Divider>
      </Segment>
    )
  }
}
