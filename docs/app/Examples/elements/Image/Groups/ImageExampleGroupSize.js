import React from 'react'
import { Image } from 'semantic-ui-react'

const src = 'http://semantic-ui.com/images/wireframe/image.png'

const ImageExampleGroupSize = () => (
  <div>
    <Image.Group size='tiny'>
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
    </Image.Group>
    <br />
    <Image.Group size='small'>
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
    </Image.Group>
  </div>
)

export default ImageExampleGroupSize
