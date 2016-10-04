import React from 'react'
import { Image as ImageComponent, Item } from 'semantic-ui-react'

const { Content, Description, Group, Header, Image, Meta } = Item
const paragraph = <ImageComponent src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />

const Metadata = () => (
  <Group>
    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content>
        <Header>Arrowhead Valley Camp</Header>
        <Meta>
          <span className='price'>$1200</span>
          <span className='stay'>1 Month</span>
        </Meta>
        <Description>{paragraph}</Description>
      </Content>
    </Item>

    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content>
        <Header>Buck's Homebrew Stayaway</Header>
        <Meta content='$1000 2 Weeks' />
        <Description>{paragraph}</Description>
      </Content>
    </Item>

    <Item>
      <Image size='tiny' src='http://semantic-ui.com/images/wireframe/image.png' />
      <Content header='Arrowhead Valley Camp' meta='$1200 1 Month' />
    </Item>
  </Group>
)

export default Metadata
