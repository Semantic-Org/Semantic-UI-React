import React, { Component } from 'react'
import { Segment } from 'stardust'

export default class SegmentHorizontalSegmentsExample extends Component {
  render() {
    return (
      <Segment.Segments className='horizontal'>
        <Segment>Left</Segment>
        <Segment>Middle</Segment>
        <Segment>Right</Segment>
      </Segment.Segments>
    )
  }
}
