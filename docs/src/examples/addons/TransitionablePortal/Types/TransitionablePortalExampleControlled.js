import React, { Component } from 'react'
import {
  Button,
  Header,
  Segment,
  TransitionablePortal,
} from 'semantic-ui-react'

export default class TransitionablePortalExampleControlled extends Component {
  state = { open: false }

  handleClick = () => this.setState((prevState) => ({ open: !prevState.open }))
  handleClose = () => this.setState({ open: false })

  render() {
    const { open } = this.state

    return (
      <div>
        <Button
          content={open ? 'Close Portal' : 'Open Portal'}
          negative={open}
          positive={!open}
          onClick={this.handleClick}
        />

        <TransitionablePortal onClose={this.handleClose} open={open}>
          <Segment
            style={{ left: '40%', position: 'fixed', top: '50%', zIndex: 1000 }}
          >
            <Header>This is a controlled portal</Header>
            <p>Portals have tons of great callback functions to hook into.</p>
            <p>To close, simply click the close button or click away</p>
          </Segment>
        </TransitionablePortal>
      </div>
    )
  }
}
