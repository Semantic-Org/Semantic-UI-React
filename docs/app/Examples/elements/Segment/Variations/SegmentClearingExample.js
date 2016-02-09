import React, { Component } from 'react'
import { Button, Segment } from 'stardust'

export default class SegmentClearingExample extends Component {
  render() {
    return (
      <Segment className='clearing'>
        <Button className='right floated'>
          floated
        </Button>
      </Segment>
    )
  }
}
