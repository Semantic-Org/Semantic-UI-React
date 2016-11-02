import React from 'react'
import { Image } from 'semantic-ui-react'

const src = `${__BASE__}assets/images/wireframe/image.png`

const ImageExampleDisabled = () => (
  <Image src={src} size='medium' disabled />
)

export default ImageExampleDisabled
