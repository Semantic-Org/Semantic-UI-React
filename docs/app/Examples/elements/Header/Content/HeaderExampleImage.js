import React from 'react'
import { Header, Image } from 'semantic-ui-react'

const HeaderExampleImage = () => (
  <Header as='h2'>
    <Image shape='circular' src='http://semantic-ui.com/images/avatar2/large/patrick.png' />
    {' '}Patrick
  </Header>
)

export default HeaderExampleImage
