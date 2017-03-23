import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const GridExampleOnlyMultiple = () => (
  <Grid>
    <Grid.Row columns={2} only='mobile tablet'>
      <Grid.Column>
        <Segment>Mobile</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Tablet</Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={2} only='tablet computer'>
      <Grid.Column>
        <Segment>Tablet</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Computer</Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={2} only='large screen widescreen'>
      <Grid.Column>
        <Segment>Large Screen</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Widescreen</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleOnlyMultiple
