import React from 'react'
import { Divider, Image } from 'semantic-ui-react'

const src = '/images/wireframe/image.png'

const ImageExampleGroupSize = () => (
  <div>
    <Image.Group size='tiny'>
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
    </Image.Group>
    <Divider hidden />
    <Image.Group size='small'>
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
    </Image.Group>
  </div>
)

export default ImageExampleGroupSize
