import React from 'react'
import { Label } from 'semantic-ui-react'

const LabelExampleImageShorthand = () => {
  const imageProps = {
    avatar: true,
    spaced: 'right',
    src: '/assets/images/avatar/small/elliot.jpg',
  }

  return <Label as='a' content='Elliot' image={imageProps} />
}

export default LabelExampleImageShorthand
