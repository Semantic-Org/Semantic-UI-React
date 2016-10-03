import React from 'react'
import { Item } from 'semantic-ui-react'

const { Content, Group, Header, Image } = Item

const Alignment = () => (
  <Group>
    <Item>
      <Image size='small' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content verticalAlign='top'>
        <Header>Top Aligned</Header>
      </Content>
    </Item>

    <Item>
      <Image size='small' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content verticalAlign='middle'>
        <Header>Middle Aligned</Header>
      </Content>
    </Item>

    <Item>
      <Image size='small' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content verticalAlign='bottom'>
        <Header>Bottom Aligned</Header>
      </Content>
    </Item>
  </Group>
)

export default Alignment
