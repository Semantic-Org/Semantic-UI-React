import React, { Component } from 'react'
import { Segment } from 'stardust'

export default class SegmentPiledSegmentsExample extends Component {
  render() {
    return (
      <Segment.Segments className='piled'>
        <Segment>Top</Segment>
        <Segment>Middle</Segment>
        <Segment>Bottom</Segment>
      </Segment.Segments>
    )
  }
}
