import React, { Component } from 'react'
import { Flag, Segment } from 'stardust'

export default class FlagExample extends Component {
  render() {
    return (
      <Segment>
        <Flag name='ae' />
        <Flag name='france' />
        <Flag name='myanmar' />
      </Segment>
    )
  }
}
