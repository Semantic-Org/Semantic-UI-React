import React from 'react'
import { Item } from 'semantic-ui-react'

const { Content, Group, Image } = Item

const Contents = () => (
  <Group divided>
    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />
      <Content verticalAlign='middle'>Content A</Content>
    </Item>

    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />
      <Content verticalAlign='middle'>Content B</Content>
    </Item>

    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />
      <Content content='Content C' verticalAlign='middle' />
    </Item>
  </Group>
)

export default Contents
