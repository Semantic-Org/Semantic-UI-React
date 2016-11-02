import React from 'react'
import { Image } from 'semantic-ui-react'

const src = `${__BASE__}assets/images/wireframe/image-text.png`

const ImageExampleLink = () => (
  <Image src={src} as='a' size='medium' href='http://google.com' target='_blank' />
)

export default ImageExampleLink
