import React from 'react'
import { Header, Icon, Image } from 'stardust'

const HeaderIconHeadersExample = () => (
  <div>
    <Header as='h2' icon textAlign='center'>
      <Icon name='users' circular />
      <Header.Content>
        Friends
      </Header.Content>
    </Header>
    <Image centered size='large' src='http://semantic-ui.com/images/wireframe/centered-paragraph.png' />
  </div>
)

export default HeaderIconHeadersExample
