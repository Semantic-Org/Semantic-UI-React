import React, { Component } from 'react'
import { Image, Segment } from 'stardust'

export default class SegmentLoadingExample extends Component {
  render() {
    return (
      <Segment loading>
        <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
      </Segment>
    )
  }
}
