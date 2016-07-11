import React, { Component } from 'react'
import { Loader, Segment } from 'stardust'

export default class ActiveLoaderExample extends Component {
  render() {
    return (
      <Segment className='very padded'>
        <Loader disabled />
      </Segment>
    )
  }
}
