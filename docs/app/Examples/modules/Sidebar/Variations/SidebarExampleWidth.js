import React, { Component } from 'react'
import { Form, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

export default class SidebarExampleWidth extends Component {
  state = { width: 'thin' }

  handleWidthChange = (e, { value }) => this.setState({ width: value })

  render() {
    const { width } = this.state

    return (
      <div>
        <Form>
          <Form.Group inline>
            <Form.Radio
              checked={width === 'thin'}
              label='Thin'
              onChange={this.handleWidthChange}
              value='thin'
            />
            <Form.Radio
              checked={width === 'very thin'}
              label='Very thin'
              onChange={this.handleWidthChange}
              value='very thin'
            />
            <Form.Radio
              checked={width === undefined}
              label='Standard'
              onChange={this.handleWidthChange}
            />
            <Form.Radio
              checked={width === 'wide'}
              label='Wide'
              onChange={this.handleWidthChange}
              value='wide'
            />
            <Form.Radio
              checked={width === 'very wide'}
              label='Very wide'
              onChange={this.handleWidthChange}
              value='very wide'
            />
          </Form.Group>
        </Form>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation='overlay'
            icon='labeled'
            inverted
            onHide={this.toggleVisibility}
            vertical
            visible
            width={width}
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

          <Sidebar.Pusher>
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
