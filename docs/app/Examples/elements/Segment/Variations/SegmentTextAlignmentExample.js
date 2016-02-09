import React, { Component } from 'react'
import { Segment } from 'stardust'

export default class SegmentTextAlignmentExample extends Component {
  render() {
    return (
      <div>
        <Segment className='right aligned'>
          Right aligned content.
        </Segment>
        <Segment className='left aligned'>
          Left aligned content.
        </Segment>
        <Segment className='center aligned'>
          Center aligned content.
        </Segment>
      </div>
    )
  }
}
