import React from 'react'
import { Image } from 'semantic-ui-react'

const ImageExampleLink = () => (
  <Image
    src='/images/wireframe/image-text.png'
    as='a'
    size='medium'
    href='http://example.com'
    target='_blank'
  />
)

export default ImageExampleLink
