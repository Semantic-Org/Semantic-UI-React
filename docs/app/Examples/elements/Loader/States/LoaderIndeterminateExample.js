import React from 'react'
import { Loader, Image, Segment } from 'stardust'

const LoaderIndeterminateExample = () => (
  <div>
    <Segment>
      <div className='ui active dimmer'>
        <Loader indeterminate text='Preparing Files' />
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>

    <Segment>
      <div className='ui active dimmer'>
        <Loader indeterminate>Preparing Files</Loader>
      </div>

      <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
    </Segment>
  </div>
)

export default LoaderIndeterminateExample
