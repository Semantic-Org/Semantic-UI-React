import React from 'react'
import { Grid } from 'semantic-ui-react'

const GridExampleReversedTablet = () => (
  <Grid reversed='tablet' columns='equal'>
    <Grid.Column>Tablet Fourth</Grid.Column>
    <Grid.Column>Tablet Third</Grid.Column>
    <Grid.Column>Tablet Second</Grid.Column>
    <Grid.Column>Tablet First</Grid.Column>
  </Grid>
)

export default GridExampleReversedTablet
