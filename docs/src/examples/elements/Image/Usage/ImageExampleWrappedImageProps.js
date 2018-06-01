import React from 'react'
import { Image } from 'semantic-ui-react'

const ImageExampleWrappedImageProps = () => (
  <Image
    as='div'
    alt='An example alt'
    size='small'
    src='/assets/images/wireframe/image-text.png'
    srcSet='/assets/images/wireframe/image.png 2x'
  />
)

export default ImageExampleWrappedImageProps
