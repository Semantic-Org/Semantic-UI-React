import React, { Component } from 'react'
import { Sidebar, Button, Menu, Image, Icon, Header } from 'semantic-ui-react'

class SidebarTopOverlay extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state
    return (
      <div>
        <Button onClick={this.toggleVisibility}>Toggle Visibility</Button>
        <div className='pushable' style={{ position: 'relative' }}>
          <Sidebar as={Menu} animation='overlay' direction='top' visible={visible} icon='labeled' inverted>
            <Menu.Item name='home'>
              <Icon name='home' />
              Home
            </Menu.Item>
            <Menu.Item name='gamepad'>
              <Icon name='gamepad' />
              Games
            </Menu.Item>
            <Menu.Item name='camera'>
              <Icon name='camera' />
              Channels
            </Menu.Item>
          </Sidebar>
          <div className='pusher'>
            <Header as='h3'>Application Content</Header>
            <Image src='http://semantic-ui.com/images/wireframe/paragraph.png' />
          </div>
        </div>
      </div>
    )
  }
}

export default SidebarTopOverlay
