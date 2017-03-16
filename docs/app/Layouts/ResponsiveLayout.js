import React from 'react'
import {
    Header,
    Segment,
    Container,
    Grid,
} from 'semantic-ui-react'

const ResponsiveLayout = () => (
  <div>
    <Header as='h1' textAlign='center' content='Responsive UI Examples' />
    <Header as='h2'  textAlign='center' content='Basic Responsive' />


    <Header as='h3' textAlign='center' content='Container' />
    <Container>
      <Segment.Group>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
      </Segment.Group>
    </Container>
    <Header textAlign='center' content='Text Container' />
    <Container text>
      <Segment.Group>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
        <Segment>Content</Segment>
      </Segment.Group>
    </Container>

    <Header textAlign='center' content='Stackable Grid' />
    <Grid columns={2} stackable>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Row columns={3}>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
        <Grid.Column>
          <Segment>Content</Segment>
        </Grid.Column>
      </Grid.Row>
      <Grid.Column width={10}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column width={6}>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h3' textAlign='center' content='Doubling Grid' />
    <Grid columns={3} doubling>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h3' textAlign='center' content="Doubling Stackable Grid" />
    <Grid columns={3} doubling stackable>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h3' textAlign='center' content='Nested Stackable Grid' />
    <Grid columns={2}>
      <Grid.Column>
        <Grid stackable doubling columns={2}>
          <Grid.Column>
            <Segment>Content</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Content</Segment>
          </Grid.Column>
        </Grid>
      </Grid.Column>
      <Grid.Column>
        <Grid stackable doubling columns={3}>
          <Grid.Column>
            <Segment>Content</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Content</Segment>
          </Grid.Column>
          <Grid.Column>
            <Segment>Content</Segment>
          </Grid.Column>
        </Grid>
      </Grid.Column>
    </Grid>

    <Header as='h3' textAlign='center' content='Stackable Grid Container' />
    <Grid columns={2} stackable container={true}>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h3' textAlign='center' content='Doubling Grid Container' />
    <Grid columns={3} doubling container={true}>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h3' textAlign='center' content='Doubling Stackable Grid Container'/>
    <Grid columns={3} doubling stackable container={true}>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

    <Header as='h2' textAlign='center' content='Device Adjustment' />

    <Header as='h3' textAlign='center' content='Device Column Width' />
    <Grid>
      <Grid.Column computer={3} tablet={9} mobile={6}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column columns={4} >
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column computer={9} tablet={3} mobile={6}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column computer={9} tablet={3} mobile={6}>
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column columns={4} >
        <Segment>Content</Segment>
      </Grid.Column>
      <Grid.Column computer={3} tablet={9} mobile={6}>
        <Segment>Content</Segment>
      </Grid.Column>
    </Grid>

  </div>
)

export default ResponsiveLayout
