import React from 'react'
import { Loader, Image, Segment } from 'stardust'

const LoaderTextExample = () => (
  <div>
    <Segment>
      <div className='ui active dimmer'>
        <Loader text='Loading' />
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active dimmer'>
        <Loader>Loading</Loader>
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active inverted dimmer'>
        <Loader inverted>Loading</Loader>
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default LoaderTextExample
