import React, { Component } from 'react'
import { Container, Message } from 'stardust'

export default class ContainerFluidExample extends Component {
  render() {
    return (
      <div>
        <Message className="info">
          <p>Fluid containers are useful for setting text alignment, or other variations on unstyled content</p>
        </Message>
        <Container fluid>
          <h2>Dogs Roles with Humans</h2>
          <p>Domestic dogs inherited complex behaviors, such as bite inhibition, from their wolf ancestors</p>
          <p>The dogs' value to early human hunter-gatherers led them quickly becoming ubiquitous across world cultures.</p>
        </Container>
      </div>

    )
  }
}
