import React, { Component } from 'react'
import { Segment } from 'stardust'

export default class SegmentTextAlignmentExample extends Component {
  render() {
    return (
      <div>
        <Segment aligned='right'>
          Right aligned content.
        </Segment>
        <Segment aligned='left'>
          Left aligned content.
        </Segment>
        <Segment aligned='center'>
          Center aligned content.
        </Segment>
      </div>
    )
  }
}
