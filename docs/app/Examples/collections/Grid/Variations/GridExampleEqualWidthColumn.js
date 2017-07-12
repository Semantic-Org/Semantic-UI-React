import React from 'react'
import { Grid, Segment } from 'semantic-ui-react'

const GridExampleEqualWidthColumn = () => (
  <Grid columns='equal'>
    <Grid.Column>
      <Segment>1</Segment>
    </Grid.Column>
    <Grid.Column width={8}>
      <Segment>2</Segment>
    </Grid.Column>
    <Grid.Column>
      <Segment>3</Segment>
    </Grid.Column>
  </Grid>
)

export default GridExampleEqualWidthColumn
