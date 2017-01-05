import React from 'react'
import { Grid } from 'semantic-ui-react'

const GridExampleReversedMobileVertically = () => (
  <Grid reversed='mobile vertically'>
    <Grid.Row>
      <Grid.Column>Mobile Row 4</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Mobile Row 3</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Mobile Row 2</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Mobile Row 1</Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleReversedMobileVertically
