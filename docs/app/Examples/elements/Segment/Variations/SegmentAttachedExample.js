import React, { Component } from 'react'
import { Segment } from 'stardust'

export default class SegmentAttachedExample extends Component {
  render() {
    return (
      <div>
        <Segment attached='top'>
          This segment is on top
        </Segment>
        <Segment attached>
          This segment is attached on both sides
        </Segment>
        <Segment attached='bottom'>
          This segment is on bottom
        </Segment>
      </div>
    )
  }
}
