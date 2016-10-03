import React from 'react'
import { Image as ImageComponent, Item } from 'semantic-ui-react'

const { Content, Description, Group, Header, Image } = Item
const paragraph = <ImageComponent src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />

const Link = () => (
  <Group link>
    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/avatar/large/stevie.jpg' />

      <Content>
        <Header>Stevie Feliciano</Header>
        <Description>{paragraph}</Description>
      </Content>
    </Item>

    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/avatar/large/veronika.jpg' />

      <Content>
        <Header>Veronika Ossi</Header>
        <Description>{paragraph}</Description>
      </Content>
    </Item>

    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/avatar/large/jenny.jpg' />

      <Content>
        <Header>Jenny Hess</Header>
        <Description>{paragraph}</Description>
      </Content>
    </Item>
  </Group>
)

export default Link
