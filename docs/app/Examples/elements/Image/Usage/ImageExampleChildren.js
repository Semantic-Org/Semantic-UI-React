import React from 'react'
import { Image, Label } from 'semantic-ui-react'

const ImageExampleChildren = () => (
  <div>
    <Image size='small'>
      <Label content='Image not found!' icon='warning' />
    </Image>
    <span>Some other content</span>
  </div>
)

export default ImageExampleChildren
