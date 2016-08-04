import React, { Component } from 'react'
import { Header, Segment } from 'stardust'

export default class HeaderTextAlignmentExample extends Component {
  render() {
    return (
      <Segment>
        <Header.H3 textAlign='right'>
          Float Right
        </Header.H3>
        <Header.H3 textAlign='left'>
          Float Left
        </Header.H3>
        <Header.H3 textAlign='justified'>
          This text takes up the full width of the container
        </Header.H3>
        <Header.H3 textAlign='center'>
          Centered
        </Header.H3>
      </Segment>
    )
  }
}
