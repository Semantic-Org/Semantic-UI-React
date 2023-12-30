import React from 'react'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react'

const GridExampleReversedMultiple = () => (
  <Grid reversed='computer tablet' columns='equal'>
    <GridRow>
      <GridColumn>Computer and Tablet Fourth</GridColumn>
      <GridColumn>Computer and Tablet Third</GridColumn>
      <GridColumn>Computer and Tablet Second</GridColumn>
    </GridRow>
  </Grid>
)

export default GridExampleReversedMultiple
