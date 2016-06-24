import React, { Component } from 'react'
import { Container, Message } from 'stardust'

export default class ContainerContainerExample extends Component {
  render() {
    return (
      <div>
        <Message className='info'>
          <p>A text container is a simpler markup alternative to using a grid with a single column, and is designed <br/>
          to have a reasonable maximum width for displaying flowing text</p>
        </Message>
        <Container text>
          <h2>Header</h2>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean </p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean </p>
        </Container>
      </div>
    )
  }
}
