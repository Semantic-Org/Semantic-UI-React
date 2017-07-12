import React from 'react'
import { Header, Image } from 'semantic-ui-react'

const HeaderExampleImage = () => (
  <Header as='h2'>
    <Image shape='circular' src='/assets/images/avatar/large/patrick.png' />
    {' '}Patrick
  </Header>
)

export default HeaderExampleImage
