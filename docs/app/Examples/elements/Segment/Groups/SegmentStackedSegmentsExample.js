import React, { Component } from 'react'
import { Segment } from 'stardust'

export default class SegmentStackedSegmentsExample extends Component {
  render() {
    return (
      <Segment.Segments className='stacked'>
        <Segment>Top</Segment>
        <Segment>Middle</Segment>
        <Segment>Bottom</Segment>
      </Segment.Segments>
    )
  }
}
