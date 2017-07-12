import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const GridExampleEqualWidthRow = () => (
  <Grid columns='equal'>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>3</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>4</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>2</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>3</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>
        <Segment>1</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>2</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleEqualWidthRow
