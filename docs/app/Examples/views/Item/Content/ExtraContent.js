import React from 'react'
import { Icon, Image as ImageComponent, Item } from 'semantic-ui-react'

const { Content, Description, Extra, Group, Header, Image } = Item
const paragraph = <ImageComponent src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />

const ExtraContent = () => (
  <Group>
    <Item>
      <Image size='small' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content>
        <Header as='a'>Cute Dog</Header>
        <Description>{paragraph}</Description>
        <Extra>
          <Icon name='green check' /> 121 Votes
        </Extra>
      </Content>
    </Item>

    <Item>
      <Image size='small' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content>
        <Header as='a'>Cute Dog</Header>
        <Description>{paragraph}</Description>
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
