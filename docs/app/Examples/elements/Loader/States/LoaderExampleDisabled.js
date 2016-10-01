import React from 'react'
import { Loader, Image, Segment } from 'stardust'

const LoaderExampleDisabled = () => (
  <Segment>
    <Loader disabled />
    <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default LoaderExampleDisabled
