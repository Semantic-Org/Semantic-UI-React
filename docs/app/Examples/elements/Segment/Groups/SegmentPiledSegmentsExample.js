import React, { Component } from 'react'
import { Segment } from 'stardust'

export default class SegmentPiledSegmentsExample extends Component {
  render() {
    return (
      <Segment.Group piled>
        <Segment>Top</Segment>
        <Segment>Middle</Segment>
        <Segment>Bottom</Segment>
      </Segment.Group>
    )
  }
}
