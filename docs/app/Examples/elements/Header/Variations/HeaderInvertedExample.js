import React, { Component } from 'react'
import { Header, Segment } from 'stardust'

export default class HeaderInvertedExample extends Component {
  render() {
    return (
      <Segment className='inverted'>
        <Header.H4 inverted color='red'>Red</Header.H4>
        <Header.H4 inverted color='orange'>Orange</Header.H4>
        <Header.H4 inverted color='yellow'>Yellow</Header.H4>
        <Header.H4 inverted color='olive'>Olive</Header.H4>
        <Header.H4 inverted color='green'>Green</Header.H4>
        <Header.H4 inverted color='teal'>Teal</Header.H4>
        <Header.H4 inverted color='blue'>Blue</Header.H4>
        <Header.H4 inverted color='purple'>Purple</Header.H4>
        <Header.H4 inverted color='violet'>Violet</Header.H4>
        <Header.H4 inverted color='pink'>Pink</Header.H4>
        <Header.H4 inverted color='brown'>Brown</Header.H4>
        <Header.H4 inverted color='grey'>Grey</Header.H4>
      </Segment>
    )
  }
}
