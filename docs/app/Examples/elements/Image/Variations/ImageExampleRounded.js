import React from 'react'
import { Image } from 'semantic-ui-react'

const src = `${__BASE__}assets/images/wireframe/square-image.png`

const ImageExampleRounded = () => (
  <Image src={src} size='medium' shape='rounded' />
)

export default ImageExampleRounded
