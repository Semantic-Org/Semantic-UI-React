import React from 'react'
import { Image } from 'semantic-ui-react'

const src = `${__BASE__}assets/images/wireframe/image.png`

const ImageExampleWrapped = () => (
  <Image src={src} size='small' wrapped />
)

export default ImageExampleWrapped
