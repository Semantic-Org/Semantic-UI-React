import React from 'react'
import { render } from 'react-dom'
import { Button, Container, Header } from 'semantic-ui-react'

const MOUNT_NODE = document.getElementById('root')

const App = () => (
  <Container>
    <Header as='h1'>Hello world!</Header>

    <Button
      content='Discover docs'
      href='http://react.semantic-ui.com'
      icon='github'
      labelPosition='left'
    />
  </Container>
)

render(<App />, MOUNT_NODE)
