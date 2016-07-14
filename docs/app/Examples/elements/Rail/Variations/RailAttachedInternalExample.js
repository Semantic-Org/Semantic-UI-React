import React, { Component } from 'react'
import { Rail, Segment } from 'stardust'

export default class RailDividingInternalExample extends Component {
  render() {
    return (
      <Segment>
        <Rail attached internal position='left'>
          <Segment>Left Rail Content</Segment>
        </Rail>

        <Rail attached internal position='right'>
          <Segment>Right Rail Content</Segment>
        </Rail>
      </Segment>
    )
  }
}
