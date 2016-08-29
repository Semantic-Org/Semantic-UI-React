import React from 'react'
import { Button, Icon, Image as ImageComponent, Item, Label } from 'stardust'

const { Content, Description, Extra, Group, Header, Image, Meta } = Item
const paragraph = <ImageComponent src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />

// TODO: Update <Button> usage after its update to v1 API

const Divided = () => (
  <Group divided>
    <Item>
      <Image src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content>
        <Header as='a'>12 Years a Slave</Header>
        <Meta>
          <span className='cinema'>Union Square 14</span>
        </Meta>
        <Description>{paragraph}</Description>
        <Extra>
          <Label>IMAX</Label>
          <Label icon='globe'>Additional Languages</Label>
        </Extra>
      </Content>
    </Item>

    <Item>
      <Image src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content>
        <Header as='a'>My Neighbor Totoro</Header>
        <Meta>
          <span className='cinema'>IFC Cinema</span>
        </Meta>
        <Description>{paragraph}</Description>
        <Extra>
          <Button className='right floated primary'>
            Buy tickets
            <Icon name='right chevron' />
          </Button>
          <Label>Limited</Label>
        </Extra>
      </Content>
    </Item>

    <Item>
      <Image src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content>
        <Header as='a'>Watchmen</Header>
        <Meta>
          <span className='cinema'>IFC</span>
        </Meta>
        <Description>{paragraph}</Description>
        <Extra>
          <Button className='right floated primary'>
            Buy tickets
            <Icon name='right chevron' />
          </Button>
        </Extra>
      </Content>
    </Item>
  </Group>
)

export default Divided
