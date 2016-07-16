import React, { Component } from 'react'
import { Loader, Segment } from 'stardust'

export default class TextLoaderExample extends Component {
  render() {
    return (
      <div>
        <Segment className='very padded'>
          <div className='ui active dimmer'>
            <Loader text='Loading' />
          </div>
        </Segment>

        <Segment className='very padded'>
          <div className='ui active dimmer'>
            <Loader>Loading</Loader>
          </div>
        </Segment>

        <Segment className='very padded'>
          <div className='ui active inverted dimmer'>
            <Loader inverted>Loading</Loader>
          </div>
        </Segment>
      </div>
    )
  }
}
