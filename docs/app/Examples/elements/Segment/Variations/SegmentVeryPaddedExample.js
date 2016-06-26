import React, { Component } from 'react'
import { Segment } from 'stardust'

export default class SegmentVeryPaddedExample extends Component {
  render() {
    return (
      <Segment padded='very'>
        Very padded content.
      </Segment>
    )
  }
}
