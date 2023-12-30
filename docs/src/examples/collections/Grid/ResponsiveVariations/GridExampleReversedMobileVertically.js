import React from 'react'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react'

const GridExampleReversedMobileVertically = () => (
  <Grid reversed='mobile vertically'>
    <GridRow>
      <GridColumn>Mobile Row 4</GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn>Mobile Row 3</GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn>Mobile Row 2</GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn>Mobile Row 1</GridColumn>
    </GridRow>
  </Grid>
)

export default GridExampleReversedMobileVertically
