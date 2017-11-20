import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { Button, Grid, Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const HorizontalSidebar = ({ animation, direction, visible }) => (
  <Sidebar as={Segment} animation={animation} direction={direction} visible={visible}>
    <Grid textAlign='center'>
      <Grid.Row columns={1}>
        <Grid.Column>
          <Header as='h3'>New Content Awaits</Header>
        </Grid.Column>
      </Grid.Row>
      <Grid columns={3} divided>
        <Grid.Column>
          <Image src='/assets/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/assets/images/wireframe/media-paragraph.png' />
        </Grid.Column>
        <Grid.Column>
          <Image src='/assets/images/wireframe/media-paragraph.png' />
        </Grid.Column>
      </Grid>
    </Grid>
  </Sidebar>
)

HorizontalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
  >
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
)

VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

export default class SidebarExampleTransitions extends Component {
  state = {
    direction: 'left',
    visible: false,
  }

  handleDirectionChange = direction => () => this.setState({ direction, visible: false })

  toggleVisibility = animation => () => this.setState({ animation, visible: !this.state.visible })

  render() {
    const { animation, direction, visible } = this.state
    const vertical = direction === 'bottom' || direction === 'top'

    return (
      <div>
        <Header as='h5'>Direction</Header>
        <Button.Group>
          <Button active={direction === 'left'} onClick={this.handleDirectionChange('left')}>Left</Button>
          <Button active={direction === 'right'} onClick={this.handleDirectionChange('right')}>Right</Button>
          <Button active={direction === 'top'} onClick={this.handleDirectionChange('top')}>Top</Button>
          <Button active={direction === 'bottom'} onClick={this.handleDirectionChange('bottom')}>Bottom</Button>
        </Button.Group>

        <Header as='h5'>All Direction Animations</Header>
        <Button onClick={this.toggleVisibility('overlay')}>Overlay</Button>
        <Button onClick={this.toggleVisibility('push')}>Push</Button>
        <Button onClick={this.toggleVisibility('scale down')}>Scale Down</Button>

        <Header as='h5'>Vertical-Only Animations</Header>
        <Button disabled={vertical} onClick={this.toggleVisibility('uncover')}>Uncover</Button>
        <Button disabled={vertical} onClick={this.toggleVisibility('slide along')}>Slide Along</Button>
        <Button disabled={vertical} onClick={this.toggleVisibility('slide out')}>Slide Out</Button>

        <Sidebar.Pushable as={Segment}>
          {vertical && <HorizontalSidebar animation={animation} direction={direction} visible={visible} />}
          {!vertical && <VerticalSidebar animation={animation} direction={direction} visible={visible} />}

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
