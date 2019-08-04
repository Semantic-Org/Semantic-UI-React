import React, { Component } from 'react'
import { Button, Grid, Header, Label, Segment, Portal } from 'semantic-ui-react'

export default class PortalExamplePortal extends Component {
  state = {
    log: [],
    logCount: 0,
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true })
    this.writeLog('onOpen()')
  }

  handleClose = () => {
    this.setState({ open: false })
    this.writeLog('onClose()')
  }

  clearLog = () => this.setState({ log: [], logCount: 0 })

  writeLog = (eventName) =>
    this.setState((prevState) => ({
      log: [
        `${new Date().toLocaleTimeString()}: ${eventName}`,
        ...prevState.log,
      ].slice(0, 20),
      logCount: prevState.logCount + 1,
    }))

  render() {
    const { log, logCount, open } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column>
          <Portal
            closeOnTriggerClick
            openOnTriggerClick
            trigger={
              <Button
                content={open ? 'Close Portal' : 'Open Portal'}
                negative={open}
                positive={!open}
              />
            }
            onOpen={this.handleOpen}
            onClose={this.handleClose}
          >
            <Segment
              style={{
                left: '40%',
                position: 'fixed',
                top: '50%',
                zIndex: 1000,
              }}
            >
              <Header>This is an example portal</Header>
              <p>Portals have tons of great callback functions to hook into.</p>
              <p>To close, simply click the close button or click away</p>
            </Segment>
          </Portal>
        </Grid.Column>
        <Grid.Column>
          <Segment.Group>
            <Segment>
              <Button
                compact
                size='small'
                floated='right'
                onClick={this.clearLog}
              >
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
      </Grid>
    )
  }
}
