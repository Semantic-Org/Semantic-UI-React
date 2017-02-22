import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const GridExampleOnly = () => (
  <Grid>
    <Grid.Row columns={2} only='large screen'>
      <Grid.Column>
        <Segment>Large Screen</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Large Screen</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2} only='widescreen'>
      <Grid.Column>
        <Segment>Widescreen</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Widescreen</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={2} only='mobile'>
      <Grid.Column>
        <Segment>Mobile</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Mobile</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3}>
      <Grid.Column only='computer'>
        <Segment>Computer</Segment>
      </Grid.Column>
      <Grid.Column only='tablet mobile'>
        <Segment>Tablet and Mobile</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>All Sizes</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>All Sizes</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={4} only='computer'>
      <Grid.Column>
        <Segment>Computer</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Computer</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Computer</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Computer</Segment>
      </Grid.Column>
    </Grid.Row>
    <Grid.Row columns={3} only='tablet'>
      <Grid.Column>
        <Segment>Tablet</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Tablet</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Tablet</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleOnly
