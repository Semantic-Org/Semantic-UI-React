import React, { Component } from 'react'
import { Segment } from 'stardust'

export default class SegmentSegmentsExample extends Component {
  render() {
    return (
      <Segment.Segments>
        <Segment>Top</Segment>
        <Segment>Middle</Segment>
        <Segment>Middle</Segment>
        <Segment>Middle</Segment>
        <Segment>Bottom</Segment>
      </Segment.Segments>
    )
  }
}
