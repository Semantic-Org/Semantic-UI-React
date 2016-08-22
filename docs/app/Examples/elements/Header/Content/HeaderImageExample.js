import faker from 'faker'
import React from 'react'
import { Header, Image } from 'stardust'

const image = <Image className='circular' src={faker.image.city(120, 120)} />

const HeaderImageExample = () => (
  <Header as='h2' image={image}>
    Welcome to Our City!
  </Header>
)

export default HeaderImageExample
