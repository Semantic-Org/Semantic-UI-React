import React, { Component } from 'react'
import { Rail, Segment } from 'stardust'

export default class RailInternalExample extends Component {
  render() {
    return (
      <Segment className='center aligned'>
        <Rail internal position='left'>
          <Segment>Left Rail Content</Segment>
        </Rail>

        <Rail internal position='right'>
          <Segment>Right Rail Content</Segment>
        </Rail>

        Segment content
      </Segment>
    )
  }
}
