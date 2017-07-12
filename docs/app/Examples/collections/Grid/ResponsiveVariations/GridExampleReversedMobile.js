import React from 'react'
import { Grid } from 'semantic-ui-react'

const GridExampleReversedMobile = () => (
  <Grid reversed='mobile' columns='equal'>
    <Grid.Column>Mobile Fourth</Grid.Column>
    <Grid.Column>Mobile Third</Grid.Column>
    <Grid.Column>Mobile Second</Grid.Column>
    <Grid.Column>Mobile First</Grid.Column>
  </Grid>
)

export default GridExampleReversedMobile
