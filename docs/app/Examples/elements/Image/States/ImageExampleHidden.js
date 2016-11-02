import React from 'react'
import { Image } from 'semantic-ui-react'

const src = `${__BASE__}assets/images/wireframe/image.png`

const ImageExampleHidden = () => (
  <Image src={src} size='small' hidden />
)

export default ImageExampleHidden
