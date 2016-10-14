import React from 'react'
import { Image, Loader, Segment } from 'semantic-ui-react'

const LoaderExampleInverted = () => (
  <Segment inverted>
    <Loader active inverted />

    <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default LoaderExampleInverted
