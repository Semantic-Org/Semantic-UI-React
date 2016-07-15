import React, { Component } from 'react'
import { Loader, Segment } from 'stardust'

export default class LoaderExample extends Component {
  render() {
    return (
      <Segment className='very padded'>
        <div className='ui active dimmer'>
          <Loader active />
        </div>
      </Segment>
    )
  }
}
