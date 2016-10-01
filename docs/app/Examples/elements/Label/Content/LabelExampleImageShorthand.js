import React from 'react'
import { Label } from 'stardust'

const LabelExampleImageShorthand = () => {
  const imageProps = {
    avatar: true,
    spaced: 'right',
    src: 'http://semantic-ui.com/images/avatar/small/elliot.jpg',
  }

  return <Label as='a' content='Elliot' image={imageProps} />
}

export default LabelExampleImageShorthand
