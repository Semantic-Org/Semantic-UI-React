import React from 'react'
import { GridRow, GridColumn, Grid } from 'semantic-ui-react'

const GridExampleReversedTabletVertically = () => (
  <Grid reversed='tablet vertically'>
    <GridRow>
      <GridColumn>Tablet Row 4</GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn>Tablet Row 3</GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn>Tablet Row 2</GridColumn>
    </GridRow>
    <GridRow>
      <GridColumn>Tablet Row 1</GridColumn>
    </GridRow>
  </Grid>
)

export default GridExampleReversedTabletVertically
