import React from 'react'
import { Grid, Image, Segment } from 'semantic-ui-react'

const GridExampleStretchedEqual = () => (
  <Grid columns='equal'>
    <Grid.Row stretched>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column width={6}>
        <Segment>
          <Image src='/images/wireframe/paragraph.png' />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column width={6}>
        <Segment>
          <Image src='/images/wireframe/paragraph.png' />
        </Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>1</Segment>
        <Segment>2</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleStretchedEqual
