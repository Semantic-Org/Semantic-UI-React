import React from 'react'
import { Grid } from 'semantic-ui-react'

const GridExampleReversedTabletVertically = () => (
  <Grid reversed='tablet vertically'>
    <Grid.Row>
      <Grid.Column>Tablet Row 4</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Tablet Row 3</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Tablet Row 2</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Tablet Row 1</Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleReversedTabletVertically
