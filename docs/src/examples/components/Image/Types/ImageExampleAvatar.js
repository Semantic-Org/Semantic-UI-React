import _ from 'lodash'
import faker from 'faker'
import React from 'react'
import { Image } from 'stardust'

const ImageExampleAvatar = () => (
  <div>
    {_.times(8, i => (
      <Image
        key={i}
        avatar
        variables={{ avatarSize: `${_.random(2, 6)}rem` }}
        src={faker.internet.avatar()}
      />
    ))}
  </div>
)

export default ImageExampleAvatar
