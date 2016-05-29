import React, { Component } from 'react'
import { Segment } from 'stardust'

export default class SegmentFloatedExample extends Component {
  render() {
    return (
      <div>
        <Segment className='right floated'>
          This segment will appear to the right
        </Segment>
        <Segment className='left floated'>
          This segment will appear to the left
        </Segment>
      </div>
    )
  }
}
