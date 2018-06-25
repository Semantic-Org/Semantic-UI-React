import React from 'react'
import { Image } from 'semantic-ui-react'

const ImageExampleImageProps = () => (
  <Image
    alt='An example alt'
    size='small'
    src='/images/wireframe/image-text.png'
    srcSet='/images/wireframe/image.png 2x'
  />
)

export default ImageExampleImageProps
