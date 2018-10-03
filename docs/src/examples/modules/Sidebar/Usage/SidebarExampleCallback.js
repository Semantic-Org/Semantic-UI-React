import React, { Component } from 'react'
import { Button, Grid, Header, Image, Label, Menu, Segment, Sidebar } from 'semantic-ui-react'

export default class VisibilityExampleCallbackFrequency extends Component {
  state = {
    log: [],
    logCount: 0,
  }

  clearLog = () => this.setState({ log: [], logCount: 0 })

  handleHideClick = () => this.setState({ visible: false })
  handleShowClick = () => this.setState({ visible: true })
  handleSidebarHide = () => this.setState({ visible: false })

  updateLog = eventName => () =>
    this.setState({
      log: [`${new Date().toLocaleTimeString()}: ${eventName}`, ...this.state.log].slice(0, 20),
      logCount: this.state.logCount + 1,
    })

  render() {
    const { log, logCount, visible } = this.state

    return (
      <Grid columns={2}>
        <Grid.Row>
          <Grid.Column>
            <Button.Group>
              <Button disabled={visible} onClick={this.handleShowClick}>
                Show sidebar
              </Button>
              <Button disabled={!visible} onClick={this.handleHideClick}>
                Hide sidebar
              </Button>
            </Button.Group>
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <Sidebar.Pushable as={Segment}>
              <Sidebar
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHidden={this.updateLog('onHidden')}
                onHide={() => {
                  this.handleSidebarHide()
                  this.updateLog('onHide')()
                }}
                onShow={this.updateLog('onShow')}
                onVisible={this.updateLog('onVisible')}
                vertical
                visible={visible}
                width='thin'
              >
                <Menu.Item as='a'>Home</Menu.Item>
                <Menu.Item as='a'>Games</Menu.Item>
                <Menu.Item as='a'>Channels</Menu.Item>
              </Sidebar>

              <Sidebar.Pusher>
                <Segment basic>
                  <Header as='h3'>Application Content</Header>
                  <Image src='/images/wireframe/paragraph.png' />
                </Segment>
              </Sidebar.Pusher>
            </Sidebar.Pushable>
          </Grid.Column>

          <Grid.Column>
            <Segment.Group>
              <Segment>
                <Button compact size='small' floated='right' onClick={this.clearLog}>
                  Clear
                </Button>
                Event Log <Label circular>{logCount}</Label>
              </Segment>
              <Segment secondary>
                <pre>
                  {log.map((e, i) => (
                    <div key={i}>{e}</div>
                  ))}
                </pre>
              </Segment>
            </Segment.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }
}
