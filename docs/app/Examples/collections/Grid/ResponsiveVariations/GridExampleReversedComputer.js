import React from 'react'
import { Grid } from 'semantic-ui-react'

const GridExampleReversedComputer = () => (
  <Grid reversed='computer' columns='equal'>
    <Grid.Row>
      <Grid.Column>Computer A Fourth</Grid.Column>
      <Grid.Column>Computer A Third</Grid.Column>
      <Grid.Column>Computer A Second</Grid.Column>
      <Grid.Column>Computer A First</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Computer B Fourth</Grid.Column>
      <Grid.Column>Computer B Third</Grid.Column>
      <Grid.Column>Computer B Second</Grid.Column>
      <Grid.Column>Computer B First</Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleReversedComputer
