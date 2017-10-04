import React, { Component } from 'react'
import { Button, Grid, Header, Segment, Portal } from 'semantic-ui-react'

export default class PortalExampleControlled extends Component {
  state = { open: false }

  handleClick = () => this.setState({ open: !this.state.open })

  handleClose = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <Grid columns={2}>
        <Grid.Column>
          <Button
            content={open ? 'Close Portal' : 'Open Portal'}
            negative={open}
            positive={!open}
            onClick={this.handleClick}
          />

          <Portal onClose={this.handleClose} open={open}>
            <Segment style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}>
              <Header>This is a controlled portal</Header>
              <p>Portals have tons of great callback functions to hook into.</p>
              <p>To close, simply click the close button or click away</p>
            </Segment>
          </Portal>
        </Grid.Column>
      </Grid>
    )
  }
}
