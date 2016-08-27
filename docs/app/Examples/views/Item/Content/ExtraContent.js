import React from 'react'
import { Item, Icon, Image as ImageComponent } from 'stardust'

const { Content, Description, Extra, Group, Header, Image } = Item
const image = <ImageComponent src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />

const ExtraContent = () => (
  <Group>
    <Item>
      <Image size='small' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content>
        <Header as='a'>Cute Dog</Header>
        <Description>{image}</Description>
        <Extra>
          <Icon name='green check' /> 121 Votes
        </Extra>
      </Content>
    </Item>

    <Item>
      <Image size='small' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content>
        <Header as='a'>Cute Dog</Header>
        <Description>{image}</Description>
        <Extra content='121 Votes' />
      </Content>
    </Item>

    <Item>
      <Image size='small' src='http://semantic-ui.com/images/wireframe/image.png' />
      <Content header='Cute Dog' extra='121 Votes' />
    </Item>
  </Group>
)

export default ExtraContent
