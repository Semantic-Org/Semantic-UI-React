import React from 'react'
import { Image } from 'semantic-ui-react'

const src = 'http://semantic-ui.com/images/wireframe/image.png'

const ImageSizeExample = () => (
  <div>
    <Image src={src} size='mini' />
    <br />
    <Image src={src} size='tiny' />
    <br />
    <Image src={src} size='small' />
    <br />
    <Image src={src} size='medium' />
    <br />
    <Image src={src} size='large' />
    <br />
    <Image src={src} size='big' />
    <br />
    <Image src={src} size='huge' />
    <br />
    <Image src={src} size='massive' />
  </div>
)

export default ImageSizeExample
