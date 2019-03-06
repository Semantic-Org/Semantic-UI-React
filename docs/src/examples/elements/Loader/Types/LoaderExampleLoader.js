import React from 'react'
import { Dimmer, Loader, Image, Segment } from 'semantic-ui-react'

const LoaderExampleLoader = () => (
  <Segment>
    <Dimmer active>
      <Loader />
    </Dimmer>

    <Image src='/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default LoaderExampleLoader
