import React from 'react'
import { Header, Segment, Container, Divider, Card } from 'semantic-ui-react'

const LayoutsExample = () => (
  <div>
    <Segment masthead vertical>
      <Container as='div'>
        <Header as='h1'> Layouts
          <div className='sub header'>Examples of using Semantic UI React</div>
        </Header>
        <Divider hidden></Divider>
      </Container>
    </Segment>
    <Container as='div' className="ui main intro container">
      <Header dividing as='h2' className="ui dividing header">Starter</Header>
        <p>Examples to introduce components and their function</p>
      <Card.Group doubling itemsPerRow='3'>
        <Card
            href='#link'
            header='Theming'
            description='Examples of many common UI components, useful for testing custom themes.'
            image='http://semantic-ui.com/images/examples/theming.png'
            >
        </Card>
        <Card
            href='#link'
            header='Responsive'
            description='Patterns for adjusting display for different devices.'
            image='http://semantic-ui.com/images/examples/responsive.png'
            >
        </Card>
        <Card
            href='#link'
            header='Grid'
            description='An introduction to using Semantic UI grids.'
            image='http://semantic-ui.com/images/examples/grid.png'
            >
        </Card>
        <Card
            href='#link'
            header='Attached Content'
            description='Examples of content that can attach to other content'
            image='http://semantic-ui.com/images/examples/attached.png'
            >
        </Card>
        <Card
            href='#link'
            header='Bootstrap Migration'
            description=' Examples of replacements for components found in Bootstrap'
            image='http://semantic-ui.com/images/examples/bootstrap.png'
            >
        </Card>
      </Card.Group>
    </Container>
  </div>
)



export default LayoutsExample
