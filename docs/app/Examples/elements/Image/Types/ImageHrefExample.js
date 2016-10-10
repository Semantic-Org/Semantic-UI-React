import React from 'react'
import { Image } from 'semantic-ui-react'

const src = 'http://semantic-ui.com/images/wireframe/image-text.png'

const ImageHrefExample = () => (
  <Image src={src} size='small' href='http://google.com' target='_blank' />
)

export default ImageHrefExample
