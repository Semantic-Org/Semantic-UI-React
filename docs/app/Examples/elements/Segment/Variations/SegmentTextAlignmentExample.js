import React, { Component } from 'react'
import { Segment } from 'stardust'

export default class SegmentTextAlignmentExample extends Component {
  render() {
    return (
      <div>
        <Segment textAlign='right'>
          Right aligned content.
        </Segment>
        <Segment textAlign='left'>
          Left aligned content.
        </Segment>
        <Segment textAlign='center'>
          Center aligned content.
        </Segment>
      </div>
    )
  }
}
