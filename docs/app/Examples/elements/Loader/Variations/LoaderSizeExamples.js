import React from 'react'
import { Loader, Image, Segment } from 'stardust'

const LoaderSizeExamples = () => (
  <div>
    <Segment>
      <div className='ui active dimmer'>
        <Loader size='mini' text='Loading' />
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active dimmer'>
        <Loader size='tiny' text='Loading' />
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active dimmer'>
        <Loader size='small' text='Loading' />
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active dimmer'>
        <Loader size='medium' text='Loading' />
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active dimmer'>
        <Loader size='large' text='Loading' />
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active dimmer'>
        <Loader size='big' text='Loading' />
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active dimmer'>
        <Loader size='huge' text='Loading' />
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active dimmer'>
        <Loader size='massive' text='Loading' />
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default LoaderSizeExamples
