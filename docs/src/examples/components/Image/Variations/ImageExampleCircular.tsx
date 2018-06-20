import faker from 'faker'
import React from 'react'
import { Image } from 'stardust'

const ImageExampleCircular = () => <Image circular src={faker.internet.avatar()} />

export default ImageExampleCircular
