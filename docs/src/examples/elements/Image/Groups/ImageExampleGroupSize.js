import React from 'react'
import { ImageGroup, Divider, Image } from 'semantic-ui-react'

const src = '/images/wireframe/image.png'

const ImageExampleGroupSize = () => (
  <div>
    <ImageGroup size='tiny'>
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
    </ImageGroup>
    <Divider hidden />
    <ImageGroup size='small'>
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
      <Image src={src} />
    </ImageGroup>
  </div>
)

export default ImageExampleGroupSize
