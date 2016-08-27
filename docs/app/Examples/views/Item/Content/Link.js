import React from 'react'
import { Item, Image as ImageComponent } from 'stardust'

const { Content, Description, Group, Header, Image, Meta } = Item
const image = <ImageComponent src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />

const Link = () => (
  <Group>
    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content>
        <Header>Arrowhead Valley Camp</Header>
        <Meta>
          <span className='price'>$1200</span>
          <span className='stay'>1 Month</span>
        </Meta>
        <Description>{image}</Description>
      </Content>
    </Item>

    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content>
        <Header>Buck's Homebrew Stayaway</Header>
        <Meta content='$1000 2 Weeks' />
        <Description>{image}</Description>
      </Content>
    </Item>

    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />
      <Content header='Arrowhead Valley Camp' meta='$1200 1 Month' />
    </Item>
  </Group>
)

export default Link
