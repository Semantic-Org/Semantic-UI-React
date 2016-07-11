import React, { Component } from 'react'
import { Loader, Segment } from 'stardust'

export default class InvertedLoaderExample extends Component {
  render() {
    return (
      <Segment className='inverted very padded'>
        <Loader active inverted />
      </Segment>
    )
  }
}
