import React, { Component } from 'react'
import { Header, Segment } from 'stardust'

export default class HeaderTextAlignmentExample extends Component {
  render() {
    return (
      <Segment>
        <Header.H3 className='right aligned'>
          Float Right
        </Header.H3>
        <Header.H3 className='left aligned'>
          Float Left
        </Header.H3>
        <Header.H3 className='justified'>
          This text takes up the full width of the container
        </Header.H3>
        <Header.H3 className='center aligned'>
          Centered
        </Header.H3>
      </Segment>
    )
  }
}
