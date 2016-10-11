import React from 'react'
import { Grid } from 'semantic-ui-react'

const GridExampleReversedComputerVertically = () => (
  <Grid reversed='computer vertically'>
    <Grid.Row>
      <Grid.Column>Computer Row 4</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Computer Row 3</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Computer Row 2</Grid.Column>
    </Grid.Row>
    <Grid.Row>
      <Grid.Column>Computer Row 1</Grid.Column>
    </Grid.Row>
  </Grid>
)

export default GridExampleReversedComputerVertically
