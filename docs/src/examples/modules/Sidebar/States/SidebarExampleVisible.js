import React from 'react'
import {
  SidebarPusher,
  SidebarPushable,
  MenuItem,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from 'semantic-ui-react'

const SidebarExampleVisible = () => (
  <SidebarPushable as={Segment}>
    <Sidebar
      as={Menu}
      animation='overlay'
      icon='labeled'
      inverted
      vertical
      visible
      width='thin'
    >
      <MenuItem as='a'>
        <Icon name='home' />
        Home
      </MenuItem>
      <MenuItem as='a'>
        <Icon name='gamepad' />
        Games
      </MenuItem>
      <MenuItem as='a'>
        <Icon name='camera' />
        Channels
      </MenuItem>
    </Sidebar>

    <SidebarPusher>
      <Segment basic>
        <Header as='h3'>Application Content</Header>
        <Image src='/images/wireframe/paragraph.png' />
      </Segment>
    </SidebarPusher>
  </SidebarPushable>
)

export default SidebarExampleVisible
