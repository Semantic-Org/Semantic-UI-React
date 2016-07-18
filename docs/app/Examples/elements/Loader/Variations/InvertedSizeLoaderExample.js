import React, { Component } from 'react'
import { Loader, Segment } from 'stardust'

export default class InvertedSizeLoaderExample extends Component {
  render() {
    return (
      <div>
        <Segment className='very padded'>
          <div className='ui active inverted dimmer'>
            <Loader size='mini' text='Loading' />
          </div>
        </Segment>

        <Segment className='very padded'>
          <div className='ui active inverted dimmer'>
            <Loader size='tiny' text='Loading' />
          </div>
        </Segment>

        <Segment className='very padded'>
          <div className='ui active inverted dimmer'>
            <Loader size='small' text='Loading' />
          </div>
        </Segment>

        <Segment className='very padded'>
          <div className='ui active inverted dimmer'>
            <Loader size='medium' text='Loading' />
          </div>
        </Segment>

        <Segment className='very padded'>
          <div className='ui active inverted dimmer'>
            <Loader size='large' text='Loading' />
          </div>
        </Segment>

        <Segment className='very padded'>
          <div className='ui active inverted dimmer'>
            <Loader size='big' text='Loading' />
          </div>
        </Segment>

        <Segment className='very padded'>
          <div className='ui active inverted dimmer'>
            <Loader size='huge' text='Loading' />
          </div>
        </Segment>

        <Segment className='very padded'>
          <div className='ui active inverted dimmer'>
            <Loader size='massive' text='Loading' />
          </div>
        </Segment>
      </div>
    )
  }
}
