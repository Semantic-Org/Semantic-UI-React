import React from 'react'
import { Image } from 'semantic-ui-react'

const src = `${__BASE__}assets/images/wireframe/square-image.png`

const ImageExampleAvatar = () => (
  <div>
    <Image src={src} avatar />
    <span>Username</span>
  </div>
)

export default ImageExampleAvatar
