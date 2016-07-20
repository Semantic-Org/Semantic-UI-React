import React from 'react'
import { Loader, Image, Segment } from 'stardust'

const LoaderDisabledExample = () => (
  <Segment>
    <Loader disabled />

    <Image src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />
  </Segment>
)

export default LoaderDisabledExample
