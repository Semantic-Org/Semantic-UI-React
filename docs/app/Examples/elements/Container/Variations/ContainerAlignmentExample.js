import React, { Component } from 'react'
import { Container, Divider } from 'stardust'

export default class ContainerAlignmentExample extends Component {
  render() {
    return (
      <div>
        <Container left>
          Left Aligned
        </Container>
        <Container center>
          Center Aligned
        </Container>
        <Container right>
          Right Aligned
        </Container>
        <Container justified>
          <b>Justified</b>
          <Divider/>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean </p>
        </Container>
      </div>

    )
  }
}
