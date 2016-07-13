import React from 'react'
import { Loader, Image, Segment } from 'stardust'

const LoaderExample = () => (
  <Segment>
    <div className='ui active dimmer'>
      <Loader />
    </div>

    <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default LoaderExample
