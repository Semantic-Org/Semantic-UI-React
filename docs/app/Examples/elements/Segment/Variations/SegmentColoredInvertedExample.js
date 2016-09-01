import React, { Component } from 'react'
import { Segment } from 'stardust'

export default class SegmentColoredInvertedExample extends Component {
  render() {
    return (
      <div>
        <Segment inverted color='red'>Red</Segment>
        <Segment inverted color='orange'>Orange</Segment>
        <Segment inverted color='yellow'>Yellow</Segment>
        <Segment inverted color='olive'>Olive</Segment>
        <Segment inverted color='green'>Green</Segment>
        <Segment inverted color='teal'>Teal</Segment>
        <Segment inverted color='blue'>Blue</Segment>
        <Segment inverted color='violet'>Violet</Segment>
        <Segment inverted color='purple'>Purple</Segment>
        <Segment inverted color='pink'>Pink</Segment>
        <Segment inverted color='brown'>Brown</Segment>
        <Segment inverted color='grey'>Grey</Segment>
        <Segment inverted color='black'>Black</Segment>
      </div>
    )
  }
}
