import React, { Component } from 'react'
import { Segment } from 'stardust'

export default class SegmentRaisedSegmentsExample extends Component {
  render() {
    return (
      <Segment.Group raised>
        <Segment>Left</Segment>
        <Segment>Middle</Segment>
        <Segment>Right</Segment>
      </Segment.Group>
    )
  }
}
