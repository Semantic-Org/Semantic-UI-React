import React from 'react'
import { Item } from 'semantic-ui-react'

const { Content, Group, Header, Image } = Item

const Relaxed = () => (
  <Group relaxed>
    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content verticalAlign='middle'>
        <Header as='a'>12 Years a Slave</Header>
      </Content>
    </Item>

    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content verticalAlign='middle'>
        <Header as='a'>My Neighbor Totoro</Header>
      </Content>
    </Item>

    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content verticalAlign='middle'>
        <Header as='a'>Watchmen</Header>
      </Content>
    </Item>
  </Group>
)

export default Relaxed
