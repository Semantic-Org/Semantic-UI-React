import React from 'react'
import { Image } from 'semantic-ui-react'

const src = `${__BASE__}assets/images/wireframe/white-image.png`

const ImageExampleBordered = () => (
  <Image src={src} size='medium' bordered />
)

export default ImageExampleBordered
