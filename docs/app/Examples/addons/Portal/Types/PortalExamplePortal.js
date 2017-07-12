import React, { Component } from 'react'
import { Portal, Button, Header, Segment } from 'semantic-ui-react'
class ExamplePortal extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPortalOpen: false,
    }

    this.portalOpened = this.portalOpened.bind(this)
    this.portalMounted = this.portalMounted.bind(this)
    this.portalClosed = this.portalClosed.bind(this)
  }

  portalMounted() {
    return alert('Portal mounted')
  }

  portalOpened() {
    this.setState({
      isPortalOpen: true,
    })
    return alert('Portal opened. Please scroll down to view.')
  }

  portalClosed() {
    this.setState({
      isPortalOpen: false,
    })
    return alert('Portal closed')
  }

  render() {
    return (
      <Portal
        openOnTriggerClick
        closeOnTriggerClick
        trigger={
          this.state.isPortalOpen ? <Button negative>Close Portal</Button> : <Button positive>Open Portal</Button> }
        onMount={ this.portalMounted }
        onOpen={ this.portalOpened }
        onClose={ this.portalClosed }
      >
        <Segment>
          <Header>This is an example portal</Header>
          <p>Portals have tons of great callback functions to hook into.</p>
          <p>To close, simply click the close button or click away</p>
        </Segment>
      </Portal>
    )
  }
}

export default ExamplePortal
