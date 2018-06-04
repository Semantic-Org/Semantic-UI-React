import React from 'react'
import { NavLink } from 'react-router-dom'
import { Card, Container, Header, Segment } from 'semantic-ui-react'

const LayoutsExample = () => (
  <Container>
    <Segment basic padded>
      <Header
        as='h1'
        content='Layouts'
        subheader='Examples of using Semantic UI React'
      />
    </Segment>

    <Segment basic padded>
      <Header
        as='h2'
        content='Starter'
        subheader='Examples to introduce components and their function'
      />

      <Card.Group stackable itemsPerRow='3'>
        <Card
          as={NavLink}
          to='/layouts/theming'
          header='Theming'
          description='Examples of many common UI components, useful for testing custom themes.'
          image='/assets/images/examples/theming.png'
        />
        <Card
          as={NavLink}
          to='/layouts/responsive'
          header='Responsive'
          description='Patterns for adjusting display for different devices.'
          image='/assets/images/examples/responsive.png'
        />
        <Card
          as={NavLink}
          to='/layouts/grid'
          header='Grid'
          description='An introduction to using Semantic UI grids.'
          image='/assets/images/examples/grid.png'
        />
        <Card
          as={NavLink}
          to='/layouts/attached-content'
          header='Attached Content'
          description='Examples of content that can attach to other content'
          image='/assets/images/examples/attached.png'
        />
        <Card
          as={NavLink}
          to='/layouts/bootstrap-migration'
          header='Bootstrap Migration'
          description=' Examples of replacements for components found in Bootstrap'
          image='/assets/images/examples/bootstrap.png'
        />
      </Card.Group>

      <Header
        as='h2'
        content='Pages'
        subheader='Starter page templates'
      />

      <Card.Group stackable itemsPerRow='3'>
        <Card
          as={NavLink}
          to='/layouts/homepage'
          header='Homepage'
          description='A simple, responsive homepage design with sidebar.'
          image='/assets/images/examples/homepage.png'
        />
        <Card
          as={NavLink}
          to='/layouts/sticky'
          header='Sticky'
          description='Using visibility APIs to fix content after passing position in page.'
          image='/assets/images/examples/sticky.png'
        />
        <Card
          as={NavLink}
          to='/layouts/fixed-menu'
          header='Fixed Menu'
          description='Using a fixed menu with page content.'
          image='/assets/images/examples/fixed.png'
        />
        <Card
          as={NavLink}
          to='/layouts/login'
          header='Login Form'
          description='A full-screen login form.'
          image='/assets/images/examples/login.png'
        />
      </Card.Group>
    </Segment>
  </Container>
)

export default LayoutsExample
