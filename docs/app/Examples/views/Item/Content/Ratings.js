import React from 'react'
import { Icon, Item } from 'semantic-ui-react'

const { Content, Group, Header, Image } = Item

const Ratings = () => (
  <Group>
    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/avatar/large/jenny.jpg' />

      <Content verticalAlign='middle'>
        <Header>
          <Icon name='like' />
          Veronika Ossi
        </Header>
      </Content>
    </Item>

    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/avatar/large/justen.jpg' />

      <Content verticalAlign='middle'>
        <Header>
          <Icon name='favorite' />
          Justen Kitsune
        </Header>
      </Content>
    </Item>
  </Group>
)

export default Ratings
