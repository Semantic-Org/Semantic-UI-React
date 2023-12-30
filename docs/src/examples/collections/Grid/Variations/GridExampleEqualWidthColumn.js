import React from 'react'
import { GridColumn, Grid, Segment } from 'semantic-ui-react'

const GridExampleEqualWidthColumn = () => (
  <Grid columns='equal'>
    <GridColumn>
      <Segment>1</Segment>
    </GridColumn>
    <GridColumn width={8}>
      <Segment>2</Segment>
    </GridColumn>
    <GridColumn>
      <Segment>3</Segment>
    </GridColumn>
  </Grid>
)

export default GridExampleEqualWidthColumn
