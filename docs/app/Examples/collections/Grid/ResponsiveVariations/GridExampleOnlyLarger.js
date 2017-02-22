import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const GridExampleDeviceVisibility = () => (
  <Grid>
    <Grid.Row columns={4} onlyLarger='mobile'>
      <Grid.Column>
        <Segment>Tablet</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Computer</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Large Screen</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Widescreen</Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={3} onlyLarger='tablet'>
      <Grid.Column>
        <Segment>Computer</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Large Screen</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Widescreen</Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={2} onlyLarger='computer'>
      <Grid.Column>
        <Segment>Large Screen</Segment>
      </Grid.Column>
      <Grid.Column>
        <Segment>Widescreen</Segment>
      </Grid.Column>
    </Grid.Row>

    <Grid.Row columns={1} onlyLarger='largeScreen'>
      <Grid.Column>
        <Segment>Large Screen</Segment>
      </Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleDeviceVisibility
