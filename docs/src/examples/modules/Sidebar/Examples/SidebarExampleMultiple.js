import { useBooleanKnob } from '@stardust-ui/docs-components'
import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const SidebarExampleMultiple = () => {
  const [visible, setVisible] = useBooleanKnob({ name: 'visible' })

  return (
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation='overlay'
        direction='left'
        icon='labeled'
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width='thin'
      >
        <Menu.Item as='a'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='gamepad' />
          Games
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='camera' />
          Channels
        </Menu.Item>
      </Sidebar>

      <Sidebar
        as={Menu}
        animation='overlay'
        direction='right'
        inverted
        vertical
        visible={visible}
      >
        <Menu.Item as='a' header>
          File Permissions
        </Menu.Item>
        <Menu.Item as='a'>Share on Social</Menu.Item>
        <Menu.Item as='a'>Share by E-mail</Menu.Item>
        <Menu.Item as='a'>Edit Permissions</Menu.Item>
        <Menu.Item as='a'>Delete Permanently</Menu.Item>
      </Sidebar>

      <Sidebar.Pusher>
        <Segment basic>
          <Header as='h3'>Application Content</Header>
          <Image src='/images/wireframe/paragraph.png' />
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

export default SidebarExampleMultiple
