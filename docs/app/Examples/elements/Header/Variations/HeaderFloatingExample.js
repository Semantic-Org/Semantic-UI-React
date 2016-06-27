import React, { Component } from 'react'
import { Header, Segment } from 'stardust'

export default class HeaderFloatingExample extends Component {
  render() {
    return (
      <Segment className='clearing'>
        <Header.H2 floated='right'>
          Float Right
        </Header.H2>
        <Header.H2 floated='left'>
          Float Left
        </Header.H2>
      </Segment>
    )
  }
}
