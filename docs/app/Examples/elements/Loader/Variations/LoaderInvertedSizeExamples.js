import React from 'react'
import { Loader, Image, Segment } from 'stardust'

const LoaderInvertedSizeExamples = () => (
  <div>
    <Segment>
      <div className='ui active inverted dimmer'>
        <Loader size='mini' text='Loading' />
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active inverted dimmer'>
        <Loader size='small' text='Loading' />
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active inverted dimmer'>
        <Loader size='medium' text='Loading' />
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active inverted dimmer'>
        <Loader size='large' text='Loading' />
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
    </Segment>
  </div>
)

export default LoaderInvertedSizeExamples
