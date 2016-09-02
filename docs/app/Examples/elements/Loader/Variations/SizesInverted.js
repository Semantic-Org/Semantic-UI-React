import React from 'react'
import { Loader, Image, Segment } from 'stardust'

// TODO: Update <Dimmer> usage after its update to v1 API

const SizesInverted = () => (
  <div>
    <Segment>
      <div className='ui active inverted dimmer'>
        <Loader size='mini'>Loading</Loader>
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active inverted dimmer'>
        <Loader size='small'>Loading</Loader>
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active inverted dimmer'>
        <Loader size='medium'>Loading</Loader>
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active inverted dimmer'>
        <Loader size='large'>Loading</Loader>
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment>
  </div>
)

export default SizesInverted
