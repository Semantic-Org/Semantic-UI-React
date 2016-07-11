import React, { Component } from 'react'
import { Loader, Segment } from 'stardust'

export default class IndeterminateLoaderExamples extends Component {
  render() {
    return (
      <div>
        <Segment className='very padded'>
          <div className='ui active dimmer'>
            <Loader indeterminate text='Preparing Files' />
          </div>
        </Segment>

        <Segment className='very padded'>
          <div className='ui active dimmer'>
            <Loader indeterminate>Preparing Files</Loader>
          </div>
        </Segment>
      </div>
    )
  }
}
