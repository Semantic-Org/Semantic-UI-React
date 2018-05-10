import faker from 'faker'
import React from 'react'
import { Image } from 'stardust'

const ImageExampleAvatar = () => (
  <div>
    <Image avatar src={faker.internet.avatar()} />
    <Image avatar src={faker.internet.avatar()} />
    <Image avatar src={faker.internet.avatar()} />
  </div>
)

export default ImageExampleAvatar
