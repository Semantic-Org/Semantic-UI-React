import React, { Component } from 'react'
import { Button, Header, Image, Menu, Ref, Segment, Sidebar } from 'semantic-ui-react'

export default class VisibilityExampleTarget extends Component {
  state = {}

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })

  handleSegmentRef = (c) => {
    this.segmentRef = c
  }

  handleSidebarHide = () => this.setState({ visible: false })

  render() {
    const { visible } = this.state

    return (
      <div>
        <Button.Group>
          <Button disabled={visible} onClick={this.handleShowClick}>
            Show sidebar
          </Button>
          <Button disabled={!visible} onClick={this.handleHideClick}>
            Hide sidebar
          </Button>
        </Button.Group>

        <Sidebar.Pushable as={Segment.Group} raised>
          {this.segmentRef && (
            <Sidebar
              as={Menu}
              animation='overlay'
              icon='labeled'
              inverted
              onHide={this.handleSidebarHide}
              vertical
              target={this.segmentRef}
              visible={visible}
              width='thin'
            >
              <Menu.Item as='a'>Home</Menu.Item>
              <Menu.Item as='a'>Games</Menu.Item>
              <Menu.Item as='a'>Channels</Menu.Item>
            </Sidebar>
          )}

          <Ref innerRef={this.handleSegmentRef}>
            <Segment>
              <Header as='h3'>Clickable area</Header>
              <p>When you will click there, the sidebar will be closed.</p>
            </Segment>
          </Ref>

          <Segment>
            <Header as='h3'>Application Content</Header>
            <Image src='/images/wireframe/paragraph.png' />
          </Segment>
        </Sidebar.Pushable>
      </div>
    )
  }
}
