import React from 'react'
import { Item } from 'stardust'

const { Content, Description, Group, Header, Image } = Item
const description = [
  'Cute dogs come in a variety of shapes and sizes. Some cute dogs are cute for their adorable faces, others for their',
  'tiny stature, and even others for their massive size.',
].join(' ')

const Descriptions = () => (
  <Group>
    <Item>
      <Image size='small' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content>
        <Header as='a'>Cute Dog</Header>
        <Description>
          <p>{description}</p>
          <p>
            Many people also have their own barometers for what makes a cute dog.
          </p>
        </Description>
      </Content>
    </Item>

    <Item>
      <Image size='small' src='http://semantic-ui.com/images/wireframe/image.png' />

      <Content>
        <Header as='a'>Cute Dog</Header>
        <Description content={description} />
      </Content>
    </Item>

    <Item>
      <Image size='small' src='http://semantic-ui.com/images/wireframe/image.png' />
      <Content header='Cute Dog' description={description} />
    </Item>
  </Group>
)

export default Descriptions
