import React from 'react'
import { Loader, Image, Segment } from 'semantic-ui-react'

// TODO: Update <Dimmer> usage after its update to v1 API

const LoaderExampleLoader = () => (
  <Segment>
    <div className='ui active dimmer'>
      <Loader />
    </div>

    <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default LoaderExampleLoader
