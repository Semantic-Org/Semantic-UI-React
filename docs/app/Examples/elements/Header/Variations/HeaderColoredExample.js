import React, { Component } from 'react'
import { Header } from 'stardust'

export default class HeaderColoredExample extends Component {
  render() {
    return (
      <div>
        <Header.H4 color='red'>Red</Header.H4>
        <Header.H4 color='orange'>Orange</Header.H4>
        <Header.H4 color='yellow'>Yellow</Header.H4>
        <Header.H4 color='olive'>Olive</Header.H4>
        <Header.H4 color='green'>Green</Header.H4>
        <Header.H4 color='teal'>Teal</Header.H4>
        <Header.H4 color='blue'>Blue</Header.H4>
        <Header.H4 color='purple'>Purple</Header.H4>
        <Header.H4 color='violet'>Violet</Header.H4>
        <Header.H4 color='pink'>Pink</Header.H4>
        <Header.H4 color='brown'>Brown</Header.H4>
        <Header.H4 color='grey'>Grey</Header.H4>
      </div>
    )
  }
}
