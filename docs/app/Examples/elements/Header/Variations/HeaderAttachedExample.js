import React, { Component } from 'react'
import { Header, Segment } from 'stardust'

export default class HeaderAttachedExample extends Component {
  render() {
    return (
      <div>
        <Header.H2 className='top attached'>
          Attached Header
        </Header.H2>
        <Segment className='attached'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
          ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          laboris nisi ut aliquip ex ea commodo consequat.
        </Segment>
      </div>
    )
  }
}
