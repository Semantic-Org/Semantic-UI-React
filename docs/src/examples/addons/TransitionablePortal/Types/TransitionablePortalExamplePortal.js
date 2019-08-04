import React, { Component } from 'react'
import {
  Button,
  Header,
  Segment,
  TransitionablePortal,
} from 'semantic-ui-react'

export default class TransitionablePortalExamplePortal extends Component {
  state = { open: false }

  handleOpen = () => this.setState({ open: true })

  handleClose = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <TransitionablePortal
        closeOnTriggerClick
        onOpen={this.handleOpen}
        onClose={this.handleClose}
        openOnTriggerClick
        trigger={
          <Button
            content={open ? 'Close Portal' : 'Open Portal'}
            negative={open}
            positive={!open}
          />
        }
      >
        <Segment
          style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}
        >
          <Header>This is an example portal</Header>
          <p>Portals have tons of great callback functions to hook into.</p>
          <p>To close, simply click the close button or click away</p>
        </Segment>
      </TransitionablePortal>
    )
  }
}
