import React, { Component } from 'react'
import { Loader, Segment } from 'stardust'

export default class SizeLoaderExamples extends Component {
  render() {
    return (
      <div>
        <Segment className='very padded'>
          <div className='ui active dimmer'>
            <Loader size='mini' text='Loading' />
          </div>
        </Segment>

        <Segment className='very padded'>
          <div className='ui active dimmer'>
            <Loader size='tiny' text='Loading' />
          </div>
        </Segment>

        <Segment className='very padded'>
          <div className='ui active dimmer'>
            <Loader size='small' text='Loading' />
          </div>
        </Segment>

        <Segment className='very padded'>
          <div className='ui active dimmer'>
            <Loader size='medium' text='Loading' />
          </div>
        </Segment>

        <Segment className='very padded'>
          <div className='ui active dimmer'>
            <Loader size='large' text='Loading' />
          </div>
        </Segment>

        <Segment className='very padded'>
          <div className='ui active dimmer'>
            <Loader size='big' text='Loading' />
          </div>
        </Segment>

        <Segment className='very padded'>
          <div className='ui active dimmer'>
            <Loader size='huge' text='Loading' />
          </div>
        </Segment>

        <Segment className='very padded'>
          <div className='ui active dimmer'>
            <Loader size='massive' text='Loading' />
          </div>
        </Segment>
      </div>
    )
  }
}
