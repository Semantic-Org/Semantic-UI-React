import React from 'react'
import { Item } from 'semantic-ui-react'

const { Content, Group, Header, Image } = Item

const Headers = () => (
  <Group>
    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />
      <Content verticalAlign='middle'>
        <Header as='a'>12 Years a Slave</Header>
      </Content>
    </Item>

    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />
      <Content verticalAlign='middle'>
        <Header as='a' content='My Neighbor Totoro' />
      </Content>
    </Item>

    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />
      <Content header='Watchmen' verticalAlign='middle' />
    </Item>
  </Group>
)

export default Headers
