import React from 'react'
import { GridColumn, Grid } from 'semantic-ui-react'

const GridExampleReversedMobile = () => (
  <Grid reversed='mobile' columns='equal'>
    <GridColumn>Mobile Fourth</GridColumn>
    <GridColumn>Mobile Third</GridColumn>
    <GridColumn>Mobile Second</GridColumn>
    <GridColumn>Mobile First</GridColumn>
  </Grid>
)

export default GridExampleReversedMobile
