import React, { Component } from 'react'
import { Header } from 'stardust'

export default class HeaderColoredExample extends Component {
  render() {
    return (
      <div>
        <Header.H4 className='red'>Red</Header.H4>
        <Header.H4 className='orange'>Orange</Header.H4>
        <Header.H4 className='yellow'>Yellow</Header.H4>
        <Header.H4 className='olive'>Olive</Header.H4>
        <Header.H4 className='green'>Green</Header.H4>
        <Header.H4 className='teal'>Teal</Header.H4>
        <Header.H4 className='blue'>Blue</Header.H4>
        <Header.H4 className='purple'>Purple</Header.H4>
        <Header.H4 className='violent'>Violent</Header.H4>
        <Header.H4 className='pink'>Pink</Header.H4>
        <Header.H4 className='brown'>Brown</Header.H4>
        <Header.H4 className='grey'>Grey</Header.H4>
      </div>
    )
  }
}
