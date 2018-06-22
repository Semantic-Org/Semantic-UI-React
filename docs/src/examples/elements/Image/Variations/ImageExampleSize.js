import React from 'react'
import { Divider, Image } from 'semantic-ui-react'

const src = '/images/wireframe/image.png'

const ImageExampleSize = () => (
  <div>
    <Image src={src} size='mini' />
    <Divider hidden />
    <Image src={src} size='tiny' />
    <Divider hidden />
    <Image src={src} size='small' />
    <Divider hidden />
    <Image src={src} size='medium' />
    <Divider hidden />
    <Image src={src} size='large' />
    <Divider hidden />
    <Image src={src} size='big' />
    <Divider hidden />
    <Image src={src} size='huge' />
    <Divider hidden />
    <Image src={src} size='massive' />
  </div>
)

export default ImageExampleSize
