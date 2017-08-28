import React, { Component } from 'react'
import { Button, Grid, Header, Segment, Portal } from 'semantic-ui-react'

export default class ExamplePortal extends Component {
  state = {
    log: [],
    open: false,
  }

  handleOpen = () => {
    this.setState({ open: true })
    this.writeLog('Portal mounted')
  }

  handleClose = () => {
    this.setState({ open: false })
    this.writeLog('Portal closed')
  }

  writeLog = message => this.setState({ log: [message, ...this.state.log] })

  render() {
    const { log, open } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column>
          <Portal
            closeOnTriggerClick
            openOnTriggerClick
            trigger={(
              <Button
                content={open ? 'Close Portal' : 'Open Portal'}
                negative={open}
                positive={!open}
              />
            )}
            onOpen={this.handleOpen}
            onClose={this.handleClose}
          >
            <Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
              <Header>This is an example portal</Header>
              <p>Portals have tons of great callback functions to hook into.</p>
              <p>To close, simply click the close button or click away</p>
            </Segment>
          </Portal>
        </Grid.Column>
        <Grid.Column>
          <Segment>
            <pre style={{ height: 200, overflowY: 'scroll' }}>
              {log.map((e, i) => <p key={i}>{e}</p>)}
            </pre>
          </Segment>
        </Grid.Column>
      </Grid>
    )
  }
}
