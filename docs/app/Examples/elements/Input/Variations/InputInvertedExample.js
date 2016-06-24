import React, { Component } from 'react'
import { Segment, Input } from 'stardust'

export default class InputInvertedExample extends Component {
  render() {
    return (
      <Segment inverted>
        <Input inverted placeholder='Search...' />
      </Segment>
    )
  }
}
