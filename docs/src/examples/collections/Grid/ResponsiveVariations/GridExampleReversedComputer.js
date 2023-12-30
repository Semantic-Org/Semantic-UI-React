import React from 'react'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react'

const GridExampleReversedComputer = () => (
  <Grid reversed='computer' columns='equal'>
    <GridRow>
      <GridColumn>Computer A Fourth</GridColumn>
      <GridColumn>Computer A Third</GridColumn>
      <GridColumn>Computer A Second</GridColumn>
      <GridColumn>Computer A First</GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn>Computer B Fourth</GridColumn>
      <GridColumn>Computer B Third</GridColumn>
      <GridColumn>Computer B Second</GridColumn>
      <GridColumn>Computer B First</GridColumn>
    </GridRow>
  </Grid>
)

export default GridExampleReversedComputer
