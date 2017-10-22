import React from 'react'
import { Grid } from 'semantic-ui-react'

const GridExampleReversedMultiple = () => (
  <Grid reversed='computer tablet' columns='equal'>
    <Grid.Row>
      <Grid.Column>Computer and Tablet Fourth</Grid.Column>
      <Grid.Column>Computer and Tablet Third</Grid.Column>
      <Grid.Column>Computer and Tablet Second</Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleReversedMultiple
