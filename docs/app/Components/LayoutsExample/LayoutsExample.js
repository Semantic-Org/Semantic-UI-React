import React from 'react'
import { Header, Segment, Container, Divider } from 'semantic-ui-react'

const LayoutsExample = () => (
    <Segment masthead vertical>
      <Container as='div'>
        <Header as='h1'> Layouts
          <div className='sub header'>Examples of using Semantic UI React</div>
        </Header>
        <Divider hidden></Divider>
      </Container>
    </Segment>
)



export default LayoutsExample
