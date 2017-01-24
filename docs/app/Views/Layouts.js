import React from 'react'
import { Link } from 'react-router'
import { Header, Segment, Container, Divider, Card } from 'semantic-ui-react'

const LayoutsExample = () => (
  <Container>
    <Segment vertical>
      <Header as='h1'> Layouts
        <Header.Subheader>Examples of using Semantic UI React</Header.Subheader>
      </Header>
      <Divider hidden />
    </Segment>
    <Header as='h2' dividing>Starter</Header>
    <p>Examples to introduce components and their function</p>
    <Card.Group stackable itemsPerRow='3'>
      <Card
        as={Link}
        to='/layouts/theming'
        header='Theming'
        description='Examples of many common UI components, useful for testing custom themes.'
        image='http://semantic-ui.com/images/examples/theming.png'
      />
      <Card
        as={Link}
        to='/layouts/responsive'
        header='Responsive'
        description='Patterns for adjusting display for different devices.'
        image='http://semantic-ui.com/images/examples/responsive.png'
      />
      <Card
        as={Link}
        to='/layouts/grid'
        header='Grid'
        description='An introduction to using Semantic UI grids.'
        image='http://semantic-ui.com/images/examples/grid.png'
      />
      <Card
        as={Link}
        to='/layouts/attached-content'
        header='Attached Content'
        description='Examples of content that can attach to other content'
        image='http://semantic-ui.com/images/examples/attached.png'
      />
      <Card
        as={Link}
        to='/layouts/bootstrap-migration'
        header='Bootstrap Migration'
        description=' Examples of replacements for components found in Bootstrap'
        image='http://semantic-ui.com/images/examples/bootstrap.png'
      />
    </Card.Group>

    <Header as='h2' dividing>Pages</Header>
    <p>Starter page templates</p>

    <Card.Group stackable itemsPerRow='3'>
      <Card
        as={Link}
        to='/layouts/homepage'
        header='Homepage'
        description='A simple, responsive homepage design with sidebar.'
        image='http://semantic-ui.com/images/examples/homepage.png'
      />
      <Card
        as={Link}
        to='/layouts/sticky'
        header='Sticky'
        description='Using visibility APIs to fix content after passing position in page.'
        image='http://semantic-ui.com/images/examples/sticky.png'
      />
      <Card
        as={Link}
        to='/layouts/fixed-menu'
        header='Fixed Menu'
        description='Using a fixed menu with page content.'
        image='http://semantic-ui.com/images/examples/fixed.png'
      />
      <Card
        as={Link}
        to='/layouts/login'
        header='Login Form'
        description='A full-screen login form.'
        image='http://semantic-ui.com/images/examples/login.png'
      />
    </Card.Group>
  </Container>
)

export default LayoutsExample
