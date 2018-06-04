import React, { Component } from 'react'
import { Button, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

export default class SidebarExampleDimmed extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state

    return (
      <div>
        <Button onClick={this.toggleVisibility}>Toggle visibility</Button>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.toggleVisibility}
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

          <Sidebar.Pusher dimmed={visible}>
            <Segment basic>
              <Header as='h3'>Application Content</Header>
              <Image src='/assets/images/wireframe/paragraph.png' />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    )
  }
}
