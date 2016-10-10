import React from 'react'
import { Button, Image as ImageComponent, Item } from 'semantic-ui-react'

const { Content, Description, Extra, Group, Header, Image } = Item
const paragraph = <ImageComponent src='http://semantic-ui.com/images/wireframe/short-paragraph.png' />

const Floated = () => (
  <Group relaxed>
    <Item>
      <Image size='small' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content verticalAlign='middle'>
        <Header>Content A</Header>
        <Description>{paragraph}</Description>
        <Extra>
          <Button floated='right'>
            Action
          </Button>
        </Extra>
      </Content>
    </Item>

    <Item>
      <Image size='small' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content verticalAlign='middle'>
        <Header>Content B</Header>
        <Description>{paragraph}</Description>
        <Extra>
          <Button floated='right'>
            Action
          </Button>
        </Extra>
      </Content>
    </Item>

    <Item>
      <Image size='small' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content verticalAlign='middle'>
        <Header>Content C</Header>
        <Description>{paragraph}</Description>
        <Extra>
          <Button floated='right'>
            Action
          </Button>
        </Extra>
      </Content>
    </Item>
  </Group>
)

export default Floated
