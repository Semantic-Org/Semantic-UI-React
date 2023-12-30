import React from 'react'
import { HeaderContent, Header, Icon, Image } from 'semantic-ui-react'

const HeaderExampleUsersIcon = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <HeaderContent>Friends</HeaderContent>
    </Header>
    <Image
      centered
      size='large'
      src='/images/wireframe/centered-paragraph.png'
    />
  </div>
)

export default HeaderExampleUsersIcon
