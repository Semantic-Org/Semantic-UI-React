import React from 'react'
import { Header, Segment, Container, Divider, Card } from 'semantic-ui-react'

const LayoutsExample = () => (
  <Container as='div'>
    <Segment masthead vertical>
      <Container as='div'>
        <Header as='h1'> Layouts
          <div className='sub header'>Examples of using Semantic UI React</div>
        </Header>
        <Divider hidden />
      </Container>
    </Segment>
    <Container as='div' className='main intro'>
      <Header dividing as='h2'>Starter</Header>
        <p>Examples to introduce components and their function</p>
      <Card.Group stackable itemsPerRow='3'>
        <Card
          href='#link'
          header='Theming'
          description='Examples of many common UI components, useful for testing custom themes.'
          image='http://semantic-ui.com/images/examples/theming.png'
        />
        <Card
          href='#link'
          header='Responsive'
          description='Patterns for adjusting display for different devices.'
          image='http://semantic-ui.com/images/examples/responsive.png'
        />
        <Card
          href='#link'
          header='Grid'
          description='An introduction to using Semantic UI grids.'
          image='http://semantic-ui.com/images/examples/grid.png'
        />

        <Card
          href='#link'
          header='Attached Content'
          description='Examples of content that can attach to other content'
          image='http://semantic-ui.com/images/examples/attached.png'
        />

        <Card
          href='#link'
          header='Bootstrap Migration'
          description=' Examples of replacements for components found in Bootstrap'
          image='http://semantic-ui.com/images/examples/bootstrap.png'
        />

      </Card.Group>
      <Header as='h2' dividing>Pages</Header>
      <p>Starter page templates</p>
      <Card.Group stackable itemsPerRow='3'>
        <Card
          href='#link'
          header='Homepage'
          description='A simple, responsive homepage design with sidebar.'
          image='http://semantic-ui.com/images/examples/homepage.png'
        />

        <Card
          href='#link'
          header='Sticky'
          description='Using visibility APIs to fix content after passing position in page.'
          image='http://semantic-ui.com/images/examples/sticky.png'
        />

        <Card
          href='#link'
          header='Fixed Menu'
          description='Using a fixed menu with page content.'
          image='http://semantic-ui.com/images/examples/fixed.png'
        />

        <Card
          href='/layouts/login'
          header='Login Form'
          description='A full-screen login form.'
          image='http://semantic-ui.com/images/examples/login.png'
        />

      </Card.Group>
    </Container>
  </Container>
)

export default LayoutsExample
