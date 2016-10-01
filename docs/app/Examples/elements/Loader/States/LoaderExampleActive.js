import React from 'react'
import { Loader, Image, Segment } from 'stardust'

const LoaderExampleActive = () => (
  <Segment>
    <Loader active />
    <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default LoaderExampleActive
