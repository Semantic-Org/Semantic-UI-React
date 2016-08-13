import React from 'react'
import { Image } from 'stardust'

const src = 'http://semantic-ui.com/images/wireframe/square-image.png'

const ImageAvatarExample = () => (
  <div>
    <Image src={src} avatar />
    <span>Username</span>
  </div>
)

export default ImageAvatarExample
